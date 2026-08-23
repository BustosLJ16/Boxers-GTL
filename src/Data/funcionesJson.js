let productos = [];

async function obtenerProductos() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        productos= data;
        return productos;
    } catch (error) {
        console.error('Error al cargar los Productos:', error)
    }
}