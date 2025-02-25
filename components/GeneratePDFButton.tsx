'use client';

import { useQueryParams } from "@/context/QueryParamsContext";
import { Button } from '@/components/ui/button';

export default function GeneratePDFButton({ scenarios }) {
    const { queryParams } = useQueryParams();

    const handleGeneratePDF = async () => {
        const sceneData = {
            scenarios: scenarios,
            queryParams: queryParams
        };

        console.log('Data being sent for PDF generation:', JSON.stringify(sceneData, null, 2));

        try {
            const response = await fetch('/api/generate-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    searchParams: queryParams,
                    sceneData: sceneData
                }),
            });

            if (response.ok) {
                const blob = await response.blob();

                // Generar el nombre del archivo
                const currentDate = new Date();
                const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
                const year = currentDate.getFullYear().toString().slice(-2);
                const dateString = `${month}-${year}`;
                const fileName = `BIS-Simulador-${queryParams.localidad || 'PVsit'}-${dateString}.pdf`;

                console.log('BUTTON PDF generated successfully');
                console.log('BUTTON File name:', fileName);

                // Crear un objeto File con el nombre correcto
                const file = new File([blob], fileName, { type: 'application/pdf' });

                // Crear una URL para el objeto File
                const url = window.URL.createObjectURL(file);

                // Crear y activar el enlace de descarga
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                // Limpiar la URL creada
                window.URL.revokeObjectURL(url);
            } else {
                const errorText = await response.text();
                console.error('Error generating PDF:', errorText);
            }
        } catch (error) {
            console.error('Error in PDF generation process:', error);
        }
    };

    return (
        <Button onClick= { handleGeneratePDF } >
        Generar PDF
            </Button>
    );
}