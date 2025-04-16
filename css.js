/* General styles */
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(45deg, #4C9EE3, #2b8ecf);
    color: #fff;
    margin: 0;
    padding: 0;
    transition: background 0.5s ease;
}

/* Header */
header {
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    padding: 100px 20px;
    transition: background 0.5s ease;
}

header h1 {
    font-size: 3rem;
    text-transform: uppercase;
    color: #f5c16c;
    letter-spacing: 2px;
    margin-bottom: 20px;
    animation: fadeIn 1s ease;
}

header p {
    font-size: 1.3rem;
    color: #e6f0ff;
}

header .btn-primary {
    background: #f5c16c;
    color: #333;
    padding: 15px 30px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.2rem;
    transition: background 0.3s ease;
}

header .btn-primary:hover {
    background: #e1a04d;
}

/* Form Section */
.form-section {
    padding: 50px 20px;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    margin: 50px 0;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

.form-section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #f5c16c;
    text-transform: uppercase;
}

.form-section input {
    width: 80%;
    padding: 15px;
    margin: 10px 0;
    background: #2b3e56;
    border: none;
    color: #fff;
    border-radius: 5px;
    transition: background 0.3s ease;
}

.form-section input:focus {
    background: #4C9EE3;
    outline: none;
}

.form-section .btn-secondary {
    background: #4C9EE3;
    color: #fff;
    padding: 15px 30px;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.form-section .btn-secondary:hover {
    background: #3a7cbf;
}

/* Footer */
footer {
    text-align: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    margin-top: 20px;
}

footer p {
    color: #e6f0ff;
}

/* Animations */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.form-section:hover {
    transform: scale(1.05);
}
