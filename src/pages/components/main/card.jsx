import { useEffect, useState } from "react";
import "./card.css";

const CARDS = ({init_data, init_save, get_local_props}) => {
    const [title, setTitle] = useState(init_data.title);
    const [studio, setStudio] = useState(init_data.studio);
    const [image, setImage] = useState(init_data.image);
    const [description, setDescription] = useState(init_data.description);

    const saveData = () => {
        const new_data = { title, studio, image, description };
        init_save(new_data);
    };
    const new_get_local_props = () => {
        const new_data = { title, studio, image, description };
        get_local_props(new_data);
    };

    return (
        <>
            <section className="section_card">
                <p className="span_notification"></p>
                <div className="conatiner_main conatiner_main_card">
                    <div className="container_box container_card" >
                        <div>
                            <input
                                placeholder="Title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                            <input
                                placeholder="Studio"
                                type="text"
                                value={studio}
                                onChange={(e) => setStudio(e.target.value)}
                                />
                        </div>
                        <div>
                            <input
                                placeholder="Url Imagem"
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                />
                        </div>
                    </div>

                    <div style={{ height: "300px", overflowY: "scroll" }}>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                        <button onClick={saveData} className="button_post_local">View the edit</button>
                        <button onClick={new_get_local_props} className="button_get_local">GET LOCAL</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export { CARDS };