import styles from "./btns.module.css";
const Btns = ({onButtonclick}) => {
  const Btnname =['c','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=','.']
    return (
     <>
       {Btnname.map(Btnname => <button className={styles.btn} onClick={() => onButtonclick(Btnname)}>{Btnname}</button>
       )}
       
     </>

      
    );
};

export default Btns;