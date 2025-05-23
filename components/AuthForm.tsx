"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import CustomInput from "./OldComp/CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [uiActive, setUiActive] = useState(true);

  // Efecto para diagnosticar congelamiento de UI
  useEffect(() => {
    console.log("AuthForm montado - perfil de Chrome:", navigator.userAgent);
    console.log("Cookies disponibles:", document.cookie ? "Sí" : "No");
    
    // Verificar si hay una sesión previa
    const hasAppwriteSession = document.cookie.includes('appwrite-session');
    console.log("Sesión Appwrite detectada:", hasAppwriteSession);

    // Heartbeat para detectar congelamiento de UI
    const interval = setInterval(() => {
      console.log("UI activa - " + new Date().toISOString());
      setUiActive(prev => !prev); // Toggle para forzar actividad en el componente
    }, 2000);

    return () => {
      console.log("AuthForm desmontado");
      clearInterval(interval);
    };
  }, []);

  // 1. Build the Zod schema depending on sign-up or sign-in
  const formSchema = authFormSchema(type);

  // 2. Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 3. Define the submit handler
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setAuthError(null);
    
    console.log("Iniciando proceso de autenticación:", type);
    console.log("Timestamp:", new Date().toISOString());

    try {
      if (type === "sign-up") {
        console.log("Procesando registro...");
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password,
        };

        console.log("Llamando a API de signUp");
        const newUser = await signUp(userData);
        console.log("Respuesta de API recibida:", !!newUser);
        
        if (newUser) {
          console.log("Registro exitoso, redirigiendo...");
          // Añadimos un pequeño timeout para asegurar que los logs sean visibles
          setTimeout(() => {
            router.push("/dashboard");
          }, 500);
        } else {
          setAuthError("Error al crear cuenta. Por favor intente nuevamente.");
        }
      }

      if (type === "sign-in") {
        console.log("Procesando inicio de sesión...");
        console.log("Datos:", { email: data.email, password: "***" });
        
        try {
          console.log("Llamando a API de signIn");
          const startTime = performance.now();
          
          const response = await signIn({
            email: data.email,
            password: data.password,
          });
          
          const endTime = performance.now();
          console.log(`Tiempo de respuesta API: ${endTime - startTime}ms`);
          console.log("Respuesta de API recibida:", !!response);

          if (response) {
            console.log("Inicio de sesión exitoso, verificando cookies...");
            console.log("Cookies después de login:", document.cookie ? "Presentes" : "No presentes");
            
            // Añadimos un pequeño timeout para asegurar que los logs sean visibles
            setTimeout(() => {
              console.log("Redirigiendo al dashboard...");
              router.replace("/dashboard"); // Usamos replace en lugar de push
            }, 500);
          } else {
            console.log("No se recibió respuesta de la API");
            setAuthError("Credenciales incorrectas. Por favor intente nuevamente.");
          }
        } catch (signInError) {
          console.error("Error específico en signIn:", signInError);
          setAuthError("Error en el proceso de inicio de sesión.");
        }
      }
    } catch (error) {
      console.error("Error general en autenticación:", error);
      setAuthError("Ocurrió un error. Por favor intente nuevamente.");
    } finally {
      setIsLoading(false);
      console.log("Proceso de autenticación finalizado");
    }
  };

  // Manejo alternativo para casos en que router.push no funcione
  const handleAlternativeNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Utilizando navegación alternativa...");
    window.location.href = "/dashboard";
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Solar Guardian
          </h1>
          <Image
            src="/BISLogo.svg"
            width={24}
            height={24}
            alt="Horizon logo"
          />
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              Please enter your details
            </p>
          </h1>
        </div>
      </header>

      {/* Indicador de estado UI - solo para debugging */}
      <div className="text-xs text-gray-400 mb-2">
        UI Active: {uiActive ? "●" : "○"}
      </div>

      {authError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-500 text-red-700 rounded-md">
          {authError}
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Extra fields only for sign-up */}
          {type === "sign-up" && (
            <>
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="firstName"
                  label="First Name"
                  placeholder="Enter your first name"
                />
                <CustomInput
                  control={form.control}
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter your last name"
                />
              </div>
              <CustomInput
                control={form.control}
                name="address1"
                label="Address"
                placeholder="Enter your specific address"
              />
              <CustomInput
                control={form.control}
                name="city"
                label="City"
                placeholder="Enter your city"
              />
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="state"
                  label="State"
                  placeholder="Example: NY"
                />
                <CustomInput
                  control={form.control}
                  name="postalCode"
                  label="Postal Code"
                  placeholder="Example: 11101"
                />
              </div>
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="dateOfBirth"
                  label="Date of Birth"
                  placeholder="YYYY-MM-DD"
                />
                <CustomInput
                  control={form.control}
                  name="ssn"
                  label="SSN"
                  placeholder="Example: 1234"
                />
              </div>
            </>
          )}

          {/* Shared fields for both sign-in and sign-up */}
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
          />

          <div className="flex flex-col gap-4">
            <Button type="submit" disabled={isLoading} className="form-btn">
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp;Loading...
                </>
              ) : type === "sign-in" ? "Sign In" : "Sign Up"}
            </Button>
            
            {/* Botón alternativo para navegación cuando router.push falla */}
            {authError && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleAlternativeNavigation}
                className="mt-2"
              >
                Ir al Dashboard (Método Alternativo)
              </Button>
            )}
          </div>
        </form>
      </Form>

      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === "sign-in"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <Link
          href={type === "sign-in" ? "/sign-up" : "/sign-in"}
          className="form-link"
        >
          {type === "sign-in" ? "Sign up" : "Sign in"}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;