import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { RepoProps } from "../types/repo";
import Loader from "../components/loader";
import Repo from "../components/repo";

const Repos = () => {
    const { username } = useParams();

    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadrepos = async function (username: string) {
            setIsLoading(true);

            const res = await fetch(`https://api.github.com/users/${username}/repos`)

            const data = await res.json();

            setIsLoading(false);

            let orderedRepos = data.sort(
                (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
            );

            orderedRepos = orderedRepos.slice(0, 5);

            setRepos(orderedRepos);
        };

        if (username) {
            loadrepos(username);
        }

    }, [])


    if (!repos && isLoading) return <Loader />

    return (
        <div>
          <h2>Explore os repositórios do usuário: {username}</h2>
          {repos && repos.length === 0 && <p>Não há repositórios.</p>}
          {repos && repos.length > 0 && (
            <div>
              {repos.map((repo: RepoProps) => (
                <Repo key={repo.name} {...repo} />
              ))}
            </div>
          )}
        </div>
      );
    };
export default Repos