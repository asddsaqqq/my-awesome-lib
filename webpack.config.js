const path = require('path');
module.exports = {
// Точка входа — наш будущий код
entry: './src/index.js',
// Куда складывать результат
output: {
filename: 'bundle.js',
path: path.resolve(__dirname, 'dist'),
library: 'MyAwesomeLib', // Имя глобальной переменной
libraryTarget: 'umd' // Универсальный формат модуля
},
// Правила обработки файлов
module: {
rules: [
{
test: /\.js$/,
// Для всех .js файлов
exclude: /node_modules/,
use: {
loader: 'babel-loader' // Использовать Babel
}
}
]
},
// Режим: продакшн (включит минификацию)
mode: 'production'
};
