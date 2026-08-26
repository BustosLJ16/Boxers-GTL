import { collection, getDocs } from "firebase/firestore";
import { db } from "../Data/firebase.js";

export async function obtenerProductos() {
    try {
        const productsCollection = collection(db, "products");
        const response = await getDocs(productsCollection);

        const products = response.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        return products;
    } catch (error) {
        console.error('Error al cargar los Productos:', error);
        return [];
    }
}