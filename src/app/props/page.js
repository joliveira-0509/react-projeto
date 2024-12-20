import Header from "@/components/Header";
import Card from "@/components/Card";

export default function Props(){

const dogs= [
    {   
        id:1,
        nome:'Fred',
        raca:'Boder-Collie',
        peso:'15',
        cor:'branco'
    },
    {   
        id:2,
        nome:'Nick',
        raca:'RND',
        peso:'5',
        cor:'bege'
    },
    {   
        id:3,
        nome:'Fiona',
        raca:'Basche',
        peso:'8',
        cor:'marrom'
    },
]

    return(
      <div>
        <h1>Props</h1>
        <div>

            {dogs.map((dog) => {
                <Card 
                keys={dog.id} 
                nome={dog.nome}
                raca={dog.raca}
                peso={dog.peso}
                cor={dog.cor}

                
                />
            })}
        </div>
      </div>
    )
}