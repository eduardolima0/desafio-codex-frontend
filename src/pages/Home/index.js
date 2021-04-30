import "./styles.css";

const Home = () => {
  return (
    <div id="header">
      <div className="topnav">
      <a className="inicial" href="/home">Home</a>
      <a className="direcionar" href="/login">Entrar</a>
      </div>
      <img src="logofinal.png" alt="logo" width="320px" height="120px"  />
      <div id="homecentral">

        <div id="homebox">
          
          
         <h3>Gerencie sua rotina em tempo real</h3>
         <h3>Adicione e organize<br></br>suas tarefas por ordem de prioridade</h3>
       </div>

            <div id="cliente">
              <a href="/login">Comece agora mesmo</a>

            </div>
      </div>
    </div>
  );
  };

export default Home;