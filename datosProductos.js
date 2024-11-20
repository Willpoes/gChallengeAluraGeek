const BASE_URL = "http://localhost:3000/productos";

const productList = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("NO SE PUDO OBTENER LISTA:", error);
    }
};

const deleteProduct = async (id) => {
    try {
        await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(`#${id} eliminado exitosamente`);
    } catch (error) {
        console.error("Error DELETE:", error);
    }
};

const createProduct = async (name, price, image) => {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, price, image }),
        });

        const data = await response.json();
        console.log("POST EXITO:", data);
        return data;
    } catch (error) {
        console.error("Error POST:", error);
    }
};

/*FUNCIONES DATOS DAO*/
export const servicesProducts = {
    productList,
    createProduct,
    deleteProduct,
};
