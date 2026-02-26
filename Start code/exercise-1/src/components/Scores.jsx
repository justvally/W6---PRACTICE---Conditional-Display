import { JAVA_RESULTS } from "../data.js";

function Scores ({ courseName, data }) {
    return (
        <div>
            <h1>{courseName}</h1>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Score</th>
                    </tr>
                </thead> 
                <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td className={item.score < 50 ? "warning" : ""}>{item.score}</td>
                </tr>
            ))}
                </tbody>
            </table>
        </div>
    )
}

export default Scores;