// Simple Restaurant Management System

document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
    loadOrders();
    loadInventory();

    // Navigation
    document.getElementById('menuBtn').addEventListener('click', () => showSection('menu'));
    document.getElementById('ordersBtn').addEventListener('click', () => showSection('orders'));
    document.getElementById('inventoryBtn').addEventListener('click', () => showSection('inventory'));

    // Add buttons
    document.getElementById('addItemBtn').addEventListener('click', addMenuItem);
    document.getElementById('addOrderBtn').addEventListener('click', addOrder);
    document.getElementById('addInventoryBtn').addEventListener('click', addInventoryItem);
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function loadMenu() {
    const menu = JSON.parse(localStorage.getItem('menu')) || [];
    const menuItems = document.getElementById('menuItems');
    menuItems.innerHTML = '';
    menu.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `<strong>${item.name}</strong> - $${item.price} <button onclick="removeMenuItem(${index})">Remove</button>`;
        menuItems.appendChild(div);
    });
}

function addMenuItem() {
    const name = prompt('Enter item name:');
    const price = prompt('Enter item price:');
    if (name && price) {
        const menu = JSON.parse(localStorage.getItem('menu')) || [];
        menu.push({ name, price: parseFloat(price) });
        localStorage.setItem('menu', JSON.stringify(menu));
        loadMenu();
    }
}

function removeMenuItem(index) {
    const menu = JSON.parse(localStorage.getItem('menu')) || [];
    menu.splice(index, 1);
    localStorage.setItem('menu', JSON.stringify(menu));
    loadMenu();
}

function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
    orders.forEach((order, index) => {
        const div = document.createElement('div');
        div.className = 'order';
        div.innerHTML = `Order ${index + 1}: ${order.items.join(', ')} - Total: $${order.total} <button onclick="removeOrder(${index})">Remove</button>`;
        orderList.appendChild(div);
    });
}

function addOrder() {
    const menu = JSON.parse(localStorage.getItem('menu')) || [];
    if (menu.length === 0) {
        alert('Add menu items first');
        return;
    }
    const itemIndex = prompt(`Select item (0-${menu.length - 1}):`);
    const quantity = prompt('Enter quantity:');
    if (itemIndex !== null && quantity) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const item = menu[parseInt(itemIndex)];
        const total = item.price * parseInt(quantity);
        orders.push({ items: [`${quantity}x ${item.name}`], total });
        localStorage.setItem('orders', JSON.stringify(orders));
        loadOrders();
    }
}

function removeOrder(index) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    loadOrders();
}

function loadInventory() {
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';
    inventory.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'invItem';
        div.innerHTML = `${item.name}: ${item.quantity} <button onclick="removeInventoryItem(${index})">Remove</button>`;
        inventoryList.appendChild(div);
    });
}

function addInventoryItem() {
    const name = prompt('Enter item name:');
    const quantity = prompt('Enter quantity:');
    if (name && quantity) {
        const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
        inventory.push({ name, quantity: parseInt(quantity) });
        localStorage.setItem('inventory', JSON.stringify(inventory));
        loadInventory();
    }
}

function removeInventoryItem(index) {
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    inventory.splice(index, 1);
    localStorage.setItem('inventory', JSON.stringify(inventory));
    loadInventory();
}