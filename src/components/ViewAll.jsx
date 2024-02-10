import React, { useEffect, useState } from 'react';
import axios from "axios";

const ViewAll = () => {
    const [output, setOutput] = useState([]);
    

    const getData = () => {
        axios.get("http://localhost:3001/api/post/viewall").then(
            (response) => {
                setOutput(response.data);
            }
        );
    };
    
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    
                                    <th scope="col">Name:</th>
                                    <th scope="col">Age:</th>

                                    <th scope="col">Post:</th>
                                    <th scope="col">Post Time:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {output.map((value, index) => (
                                    <tr key={index}>
                          
                                        <td>{value.userId.name}</td>
                                        <td>{value.userId.age}</td>

                                        <td>{value.post}</td>
                                        <td>{value.postedDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAll;