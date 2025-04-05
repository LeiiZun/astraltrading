// Fonction pour gérer la soumission du formulaire de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Connexion réussie !');
        // Implémenter la logique de connexion
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
