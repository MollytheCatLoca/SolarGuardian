'use client';

import React, { useState, useEffect } from "react";
import { useQueryParams } from "@/context/QueryParamsContext";
import { Sparkles } from 'lucide-react';

interface MagicButtonPDFSingleScenarioProps {
    scenario: any;
    id: string;
}

export default function MagicButtonPDFSingleScenario({ scenario, id }: MagicButtonPDFSingleScenarioProps) {
    const { queryParams } = useQueryParams();
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log('MagicButtonSingle: Received props:', { id, scenario: scenario ? 'present' : 'missing' });
        console.log('MagicButtonSingle: QueryParams:', queryParams);
    }, [id, scenario, queryParams]);


    const handleGeneratePDF = async () => {
        setIsGenerating(true);
        setError(null);

        if (!id || !scenario) {
            console.error('MagicButton: Missing required data (id or scenario)');
            setError('Datos incompletos para generar el PDF.');
            setIsGenerating(false);
            return;
        }

        const dataToSend: any = {
            id: id,
            searchParams: queryParams,
            sceneData: { scenario: scenario },
            scenarioId: queryParams.scenarioId // Añadimos el scenarioId aqu
        };

        //console.log('MagicButton: Data being sent for PDF generation:', JSON.stringify(dataToSend, null, 2));
        console.log('MagicButtonSingleScenario: Data being sent for PDF generation:')
        try {
            const response = await fetch('/api/generate-pdf-single', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                const blob = await response.blob();
                const contentDisposition = response.headers.get('Content-Disposition');
                let fileName = 'document.pdf';

                if (contentDisposition) {
                    // Corregido: Ajustada la expresión regular para extraer el nombre del archivo
                    const fileNameMatch = contentDisposition.match(/filename="?(.+?)"?$/i);
                    if (fileNameMatch && fileNameMatch[1]) {
                        fileName = fileNameMatch[1].trim();
                    }
                }


                console.log('MagicButton: PDF generated successfully');
                console.log('MagicButton: File name:', fileName);

                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            } else {
                const errorText = await response.text();
                console.error('MagicButton: Error generating PDF:', errorText);
                setError('Error al generar el PDF. Por favor, inténtelo de nuevo.');
            }
        } catch (error) {
            console.error('MagicButton: Error in PDF generation process:', error);
            setError('Error en el proceso de generación del PDF. Por favor, inténtelo de nuevo.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div>
        <button
                onClick= { handleGeneratePDF }
    disabled = { isGenerating }
    className = "relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2" >
                <Sparkles className="h-5 w-5" />
                    { isGenerating? 'Generando PDF...': 'Generar PDF' }
                    </span>
                    </button>
    {
        error && (
            <p className="mt-2 text-red-500 text-sm" > { error } </p>
            )
    }
    </div>
    );
}