import { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'
import { useSelector } from "react-redux";

export const ChatBot = ()=>{
    const { role } = useSelector((state) => state. authReducer)
    const [hiden, setHiden] = useState(false)
      useEffect(() => {
        const scriptId = 'voiceflow-widget-script';
    
        const loadVoiceflowWidget = (d, t) => {
          let existingScript = document.querySelector(`#${scriptId}`);
    
          if (existingScript) {
            console.log('Script ya cargado');
          } else {
            const v = d.createElement(t);
            v.id = scriptId;
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
            v.type = "text/javascript";
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '67556f4f65738b8d1a34b2b3' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
              });
            };
            d.head.appendChild(v);
          }
        };
    
        if (role != null) {
          loadVoiceflowWidget(document, 'script');
        } else {
          const existingScript = document.querySelector(`#${scriptId}`);
          if (existingScript) {
            existingScript.remove();
            console.log('Script eliminado');
          }
    
          // Eliminar cualquier instancia de Voiceflow si no hay rol
          const voiceflowContainer = document.querySelector('.voiceflow-widget-container');
          if (voiceflowContainer) {
            voiceflowContainer.remove();
            console.log('Contenedor Voiceflow eliminado');
          }
        }
      }, [role])
    
   
}