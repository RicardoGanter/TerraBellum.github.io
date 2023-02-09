import styles from '../../styles/texto.module.css'


const AnimacionTexto = ()=>{
const click = () => {
    console.log('saaas')
};
    const textoevento = document.getElementById('texxt');
    textoevento.addEventListener('click', click)
    // window.addEventListener('scroll', function(){
    //     let animation = document.getElementById('texxt');
    //     let posicionObj1 = animation.getBoundingClientRect().top;
    //     console.log(posicionObj1);
    // })
    
};

export default AnimacionTexto;