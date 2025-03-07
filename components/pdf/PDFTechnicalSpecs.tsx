import React from 'react';

const PDFTechnicalSpecs: React.FC = () => {
  // Contenedor principal con dimensiones fijas
  const containerStyle = {
    width: '250mm',
    height: '160mm',
    padding: '1px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
    overflow: 'hidden',
  };

  // Estilo para secciones con fondo degradado
  const gradientStyle = {
    background: 'linear-gradient(145deg, rgba(17,25,40,0.8), rgba(13,20,30,0.9))',
    borderRadius: '10px',
    border: '1px solid rgba(138,58,180,0.15)',
    padding: '15px',
  };

  // Estilo para tarjetas internas (bloques con fondo semitransparente)
  const innerCardStyle = {
    backgroundColor: 'rgba(17,25,40,0.5)',
    borderRadius: '8px',
    padding: '12px',
    border: '1px solid rgba(255,255,255,0.05)',
    marginBottom: '12px',
  };

  // Etiquetas pequeñas
  const tagStyle = {
    backgroundColor: 'rgba(138,58,180,0.1)',
    borderRadius: '4px',
    padding: '3px 6px',
    fontSize: '9px',
    color: '#e5e7eb',
  };

  // Estilos de cabecera para secciones
  const headerStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#8a3ab4',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  // Subcabeceras (títulos de tarjetas internas)
  const subHeaderStyle = {
    fontSize: '13px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '8px',
  };

  // Estilo de listas
  const listStyle = {
    paddingLeft: '15px',
    margin: 0,
    listStyleType: 'none',
    fontSize: '11px',
    color: '#d1d5db',
  };

  const smallListStyle = {
    ...listStyle,
    fontSize: '10px',
    paddingLeft: 0,
  };

  return (
    <div className="pdf-technical-specs" style={containerStyle}>
      {/* Arquitectura del Sistema */}
      <div style={gradientStyle}>
        <h3 style={headerStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="7" height="7" rx="1" stroke="#8a3ab4" strokeWidth="2" />
            <rect x="14" y="3" width="7" height="7" rx="1" stroke="#8a3ab4" strokeWidth="2" />
            <rect x="3" y="14" width="7" height="7" rx="1" stroke="#8a3ab4" strokeWidth="2" />
            <rect x="14" y="14" width="7" height="7" rx="1" stroke="#8a3ab4" strokeWidth="2" />
            <path d="M7 10V14" stroke="#8a3ab4" strokeWidth="2" />
            <path d="M17 10V14" stroke="#8a3ab4" strokeWidth="2" />
            <path d="M10 7H14" stroke="#8a3ab4" strokeWidth="2" />
            <path d="M10 17H14" stroke="#8a3ab4" strokeWidth="2" />
          </svg>
          Arquitectura de Microservicios
        </h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 2 }}>
            {/* Capa de Adquisición de Datos */}
            <div style={innerCardStyle}>
              <h4 style={subHeaderStyle}>Capa de Adquisición de Datos</h4>
              <ul style={listStyle}>
                <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span>
                    <strong>SmartLogger Pro Series:</strong> Comunicación multi-protocolo (Modbus TCP/RTU, MQTT, OPC UA)
                  </span>
                </li>
                <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span>
                    <strong>Data Polling:</strong> Granularidad configurable de 1s a 15min con compresión de datos
                  </span>
                </li>
                <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span>
                    <strong>Conectores:</strong> 50+ drivers para inversores, medidores, PLCs y estaciones meteorológicas
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span>
                    <strong>ETL Engine:</strong> Extracción, transformación y carga en tiempo real con redundancia 3N
                  </span>
                </li>
              </ul>
            </div>
            {/* Middleware y Procesamiento */}
            <div style={{ ...innerCardStyle, marginBottom: 0 }}>
              <h4 style={subHeaderStyle}>Middleware y Procesamiento</h4>
              <ul style={listStyle}>
                <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span>
                    <strong>Message Broker:</strong> Apache Kafka (3 millones/msg/seg)
                  </span>
                </li>
                <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span>
                    <strong>Procesamiento:</strong> Apache Spark para análisis en tiempo real
                  </span>
                </li>
                <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span>
                    <strong>Almacenamiento:</strong> TimescaleDB con compresión adaptativa
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span>
                    <strong>Machine Learning:</strong> TensorFlow para predicciones y mantenimiento predictivo
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Servicios de Frontend */}
          <div style={{ flex: 1, ...innerCardStyle, display: 'flex', flexDirection: 'column' }}>
            <h4 style={subHeaderStyle}>Servicios de Frontend</h4>
            <ul
              style={{
                ...listStyle,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>
                  <strong>Visualización:</strong> API GraphQL con React y D3.js
                </span>
              </li>
              <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>
                  <strong>Autenticación:</strong> OAuth 2.0 con JWT y MFA
                </span>
              </li>
              <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>
                  <strong>API Gateway:</strong> Kong con rate-limiting y caching
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>
                  <strong>Notificaciones:</strong> Sistema multi-canal escalable
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Capacidades SCADA */}
      <div style={gradientStyle}>
        <h3 style={headerStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3H3V10H10V3Z" stroke="#8a3ab4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 3H14V10H21V3Z" stroke="#8a3ab4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 14H14V21H21V14Z" stroke="#8a3ab4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 14H3V21H10V14Z" stroke="#8a3ab4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Sistema SCADA Avanzado
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {/* Control en Tiempo Real */}
          <div style={innerCardStyle}>
            <h4 style={{ ...subHeaderStyle, display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%' }} />
              Control en Tiempo Real
            </h4>
            <ul style={listStyle}>
              <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>Latencia &lt; 100ms</span>
              </li>
              <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>Comandos remotos con MFA</span>
              </li>
              <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>Regulación de potencia activa/reactiva</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>Diagrama unifilar interactivo</span>
              </li>
            </ul>
          </div>
          {/* Supervisión Inteligente */}
          <div style={innerCardStyle}>
            <h4 style={{ ...subHeaderStyle, display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#60a5fa', borderRadius: '50%' }} />
              Supervisión Inteligente
            </h4>
            <ul style={listStyle}>
              <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>Anomalías con IA</span>
              </li>
              <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>Umbrales dinámicos</span>
              </li>
              <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>Visualización geoespacial</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>Digital Twin en tiempo real</span>
              </li>
            </ul>
          </div>
          {/* Funciones de Seguridad */}
          <div style={innerCardStyle}>
            <h4 style={{ ...subHeaderStyle, display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#f472b6', borderRadius: '50%' }} />
              Funciones de Seguridad
            </h4>
            <ul style={listStyle}>
              <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>Encriptación AES-256</span>
              </li>
              <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>Segmentación DMZ</span>
              </li>
              <li style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>RBAC mínimo</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                <span>IDS/IPS en tiempo real</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Requisitos Técnicos y Opciones de Implementación */}
      <div style={{ display: 'flex', gap: '15px' }}>
        {/* Requisitos del Sistema */}
        <div style={{ flex: 1, ...gradientStyle }}>
          <h3 style={headerStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8H22" stroke="#8a3ab4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 16H22" stroke="#8a3ab4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="#8a3ab4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 4V20" stroke="#8a3ab4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Requisitos del Sistema
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {/* Servidor Enterprise */}
            <div style={innerCardStyle}>
              <h4 style={{ ...subHeaderStyle, display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#60a5fa', borderRadius: '50%' }} />
                Servidor Enterprise
              </h4>
              <ul style={smallListStyle}>
                <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span><strong>CPU:</strong> 8+ núcleos</span>
                </li>
                <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span><strong>RAM:</strong> 32GB mínimo</span>
                </li>
                <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span><strong>Almacenamiento:</strong> 1TB NVMe SSD</span>
                </li>
                <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span><strong>Red:</strong> 10Gbps</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span><strong>SO:</strong> Ubuntu/RHEL</span>
                </li>
              </ul>
            </div>
            {/* Hardware de Campo */}
            <div style={innerCardStyle}>
              <h4 style={{ ...subHeaderStyle, display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%' }} />
                Hardware de Campo
              </h4>
              <ul style={smallListStyle}>
                <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span><strong>SmartLogger:</strong> BIS-SL2000</span>
                </li>
                <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span><strong>RTU:</strong> Unidades terminales</span>
                </li>
                <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span><strong>Comunicación:</strong> 4G/LTE o fibra</span>
                </li>
                <li style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span><strong>Sensores:</strong> Estación meteorológica</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '4px', height: '4px', backgroundColor: '#8a3ab4', borderRadius: '50%' }} />
                  <span><strong>Alimentación:</strong> UPS industrial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Opciones de Implementación */}
        <div style={{ flex: 1, ...gradientStyle }}>
          <h3 style={headerStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#8a3ab4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#8a3ab4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#8a3ab4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Opciones de Implementación
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Enterprise Cloud (SaaS) */}
            <div
              style={{
                ...innerCardStyle,
                padding: '10px',
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(138,58,180,0.1)',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  color: '#8a3ab4',
                }}
              >
                1
              </div>
              <div>
                <h4 style={subHeaderStyle}>Enterprise Cloud (SaaS)</h4>
                <p style={{ fontSize: '10px', color: '#d1d5db', margin: 0 }}>
                  Plataforma en la nube con alta disponibilidad, escalado automático y sin infraestructura local.
                </p>
                <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                  <span style={tagStyle}>Tier-3 Datacenter</span>
                  <span style={tagStyle}>ISO 27001</span>
                  <span style={tagStyle}>Geo-redundante</span>
                </div>
              </div>
            </div>
            {/* Hybrid Edge-Cloud */}
            <div
              style={{
                ...innerCardStyle,
                padding: '10px',
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(138,58,180,0.1)',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  color: '#8a3ab4',
                }}
              >
                2
              </div>
              <div>
                <h4 style={subHeaderStyle}>Hybrid Edge-Cloud</h4>
                <p style={{ fontSize: '10px', color: '#d1d5db', margin: 0 }}>
                  Procesamiento local para funciones críticas con sincronización a la nube.
                </p>
                <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                  <span style={tagStyle}>Edge Computing</span>
                  <span style={tagStyle}>Sincronización</span>
                  <span style={tagStyle}>Offline-Ready</span>
                </div>
              </div>
            </div>
            {/* On-Premise Enterprise */}
            <div
              style={{
                ...innerCardStyle,
                padding: '10px',
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(138,58,180,0.1)',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  color: '#8a3ab4',
                }}
              >
                3
              </div>
              <div>
                <h4 style={subHeaderStyle}>On-Premise Enterprise</h4>
                <p style={{ fontSize: '10px', color: '#d1d5db', margin: 0 }}>
                  Implementación en infraestructura del cliente para máximo control y seguridad.
                </p>
                <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                  <span style={tagStyle}>Máxima seguridad</span>
                  <span style={tagStyle}>Control total</span>
                  <span style={tagStyle}>Air-Gap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificaciones y Compatibilidad */}
      <div style={gradientStyle}>
        <h3 style={headerStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
              stroke="#8a3ab4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2L14.3 6.5L19 7.4L15.6 11.1L16.5 16L12 13.8L7.5 16L8.4 11.1L5 7.4L9.7 6.5L12 2Z"
              stroke="#8a3ab4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Certificaciones y Compatibilidad
        </h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Certificaciones de Seguridad */}
            <div style={innerCardStyle}>
              <h4 style={subHeaderStyle}>Certificaciones de Seguridad</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                <span style={tagStyle}>ISO 27001</span>
                <span style={tagStyle}>IEC 62443</span>
                <span style={tagStyle}>NIST CSF</span>
                <span style={tagStyle}>SOC 2 Type II</span>
                <span style={tagStyle}>GDPR Compliant</span>
                <span style={tagStyle}>NERC CIP</span>
              </div>
            </div>
            {/* Compatibilidad de Protocolos */}
            <div style={innerCardStyle}>
              <h4 style={subHeaderStyle}>Compatibilidad de Protocolos</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                <span style={tagStyle}>Modbus TCP/RTU</span>
                <span style={tagStyle}>IEC 61850</span>
                <span style={tagStyle}>IEC 60870-5-104</span>
                <span style={tagStyle}>DNP3</span>
                <span style={tagStyle}>OPC UA</span>
                <span style={tagStyle}>MQTT</span>
                <span style={tagStyle}>SNMP</span>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Compatibilidad con Dispositivos */}
            <div style={innerCardStyle}>
              <h4 style={subHeaderStyle}>Compatibilidad con Dispositivos</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                <span style={tagStyle}>Inversores: 50+ fabricantes</span>
                <span style={tagStyle}>Medidores: Elster, Itron, Landis+Gyr</span>
                <span style={tagStyle}>PLCs: Siemens, ABB, Schneider</span>
                <span style={tagStyle}>Trackers: NEXTracker, Soltec, STI</span>
                <span style={tagStyle}>Sensores: Davis, Vaisala, Kipp&Zonen</span>
              </div>
            </div>
            {/* Estándares de Interoperabilidad */}
            <div style={innerCardStyle}>
              <h4 style={subHeaderStyle}>Estándares de Interoperabilidad</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                <span style={tagStyle}>SunSpec Alliance</span>
                <span style={tagStyle}>IEEE 2030.5</span>
                <span style={tagStyle}>OpenADR 2.0</span>
                <span style={tagStyle}>CIM (IEC 61970/61968)</span>
                <span style={tagStyle}>MESA-ESS</span>
                <span style={tagStyle}>IEEE 1547-2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFTechnicalSpecs;
