import './GithubUser.css';
import useGitHub from './hook/useGitHub';

const GithubUser = ({ username }) => {

    const {user, error, loading} = useGitHub(username);

    return(
        <div className="github-user">
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {
                user && (
                    <ul>
                        <li>
                            <img className="image" src={`${user.avatar_url}`} alt="" />
                        </li>
                        <li> {user.type} : {user.login ? user.login : "NA"}</li>
                        <li>Name : {user.name}</li>
                        <li>Email : {user.email}</li>
                        <li>Location : {user.location}</li>
                    </ul>
                )
            }
        </div>
    )
}

export default GithubUser;

// https://api.github.com/users/binshadcs