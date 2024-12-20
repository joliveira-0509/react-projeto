export default function Card({ id, nome, raca, peso, cor }) {
    return (
        <div>
            <h2>
                {nome}
            </h2>
            <p>
                {id}
            </p>
            <p>
                {raca}
            </p>
            <p>
                {peso}
            </p>
            <p>
                {cor}
            </p>
        </div>
    )
}