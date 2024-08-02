'use client'
import { useState } from "react"
import { updateWatch } from "../server-actions/updateWatch";



export default function EditWatch({watch}) {


    const [showModal, setShowModal] = useState(false);
    const [formData,setFormData] = useState({
        id: watch.id,
        brand: watch.brand,
        model: watch.model,
        refNumber: watch.reference_number
    })


    const handleChange = (event) => setFormData({...formData, [event.target.name]: event.target.value})

    
    return (
    
    
    <div>
        <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
        </button>
        {
            showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center px-4">
                    <div className="modal-content bg-gray-900 p-6 rounded-lg w-full max-w-md">
                        <span className="close text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right" onClick={() => setShowModal(false)}>&times;</span>
                        <form onSubmit={() => setShowModal(false)} action={updateWatch}>
                     
                            <div className="mb-4">
                                <label htmlFor="brand" className="block textgray300 mb-2">Brand</label>
                                <input 
                                    type="text" 
                                    id="brand" 
                                    name="brand" 
                                    value={formData.brand} 
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="model" className="block textgray300 mb-2">Model</label>
                                <input 
                                    type="text" 
                                    id="model" 
                                    name="model" 
                                    value={formData.model} 
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="refNumber" className="block textgray300 mb-2">Reference Number</label>
                                <input 
                                    type="refNumber" 
                                    id="refNumber" 
                                    name="refNumber" 
                                    value={formData.refNumber} 
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                                />
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            )
        }

    </div>
  )
}