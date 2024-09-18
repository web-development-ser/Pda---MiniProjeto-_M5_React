import React, { useEffect, useState } from "react";
import './main.api.css';
import { CARDS } from "./main/card";


const MAIN_API = () => {
    const [data, setData] = useState({ title: "", studio: "", image: "", description: "" });
    const [textSearch, setTextSearch] = useState("Dragon Bal");
    const [search, setSearch] = useState(textSearch);

    const [loading, setLoading] = useState(true);

    const [notification, setNotification] = useState("Digite algo!");

    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}/&limit=1`);
                const result = await response.json();
                setData ({title: result.data[0].title, image: result.data[0].images.jpg.image_url, description: result.data[0].synopsis, studio: result.data[0].studios[0].name});
                setNotification("");

                setLoading (true);
                setTimeout(() => setLoading (false), 1000);
            } catch (err) {
                setNotification("Maybe you didn't type something, or it seems that this search was unsuccessful, try again, if it doesn't work test...");
                // container_prox (true);
            };
        };
        fetchData();
    }, [search]);

    const onSave = async (new_data) => {
        try {
            const payload = {
                title: new_data.title,
                type: null, 
                genre: null, 
                episodes: null, 
                rating: null, 
                releaseYear: null, 
                studios: new_data.studio, 
                synopsis: new_data.description, 
                status: null
            };
        
            const response = await fetch("http://localhost:7070/anm/addCategoryAnm", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(payload)
            });
        
            if (response.ok) {
                const responseData = await response.json();
                console.log("Dados enviados com sucesso!", responseData.listTo);
            } else {
                console.error("Erro ao enviar dados", response.status, response.statusText);
            }
          } catch (error) {
            console.error("Erro no fetch:", error);
          };
    };

    const get_local = (new_data) => {
        let a = `${JSON.stringify(new_data)}`;
        setData ({ title: new_data.title, studio: new_data.studio, image: new_data.image, description: new_data.description });
    };

    return (
        <main>
            <section className="section_fetch">
                <div className="conatiner_search">
                    <input type="text" placeholder="Busque algo!" onChange={(text) => {setTextSearch (text.target.value)}}/>
                    <span onClick={() => {setSearch (textSearch)}} class="material-symbols-outlined">search</span>
                </div>

                <p className="span_notification">{notification}</p>
                <div className="conatiner_main">
                    <div className="container_box" >
                        <div>
                            <h3>{data.title}</h3>
                            <p>{data.studio}</p>
                        </div>
                        <img src={data.image} alt={data.title} />
                    </div>

                    <div style={{ height: "200px", overflowY: "scroll" }}>
                        <p><strong>Description: </strong>{data.description}</p>
                        <button className="button_post">EDIT</button>
                    </div>
                </div>
            </section>

            <section>
                {
                    loading ? (
                        <p>Carregando dados!</p>
                    ) : (
                        <CARDS init_data={data} init_save={onSave} get_local_props={get_local} />
                    )
                };
            </section>
        </main>
    );
};

export { MAIN_API };