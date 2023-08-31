import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import "./Profile.scss";
import { Divider } from "antd";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);
  if (!user) {
    return <span>Cargando...</span>;
  }

  return (
    <div className="perfil">
      <h2>TU PERFIL</h2>
    <div className="contenedorProfile">
      <div className="imgInfo">
        <div className="img">
          <img
            src="media\Perfil\woman-1274056_1280.jpg"
            alt="Foto de perfil"
          />
        </div>
        
        <div className="info">
         <span><h3>Nombre</h3> {user.name}</span>
         <Divider></Divider>  
         <span><h3>Apellido</h3>{user.last_name}</span>
         <Divider></Divider>
         <span><h3>Email</h3>{user.email} </span> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
