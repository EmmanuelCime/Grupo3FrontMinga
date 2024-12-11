import { useSelector } from "react-redux";

export const ChatBot = ()=>{
    const { role } = useSelector((state) => state. authReducer)
    
    if (role != null) {
        return((function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '67556f4f65738b8d1a34b2b3' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
              });
            }
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
        })(document, 'script'));    
    }
}