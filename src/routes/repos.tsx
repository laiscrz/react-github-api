
import { useParams } from "react-router-dom"


const Repos = () => {
    const { username } = useParams();

    

    return (
        <div>
            <h2>Explore os repositórios do usuário : {username}</h2>
            <div>
                
            </div>
        </div>
    )
}

export default Repos