import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars'
import bodyParser from 'body-parser';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
	.then(() => {
		const app = express();
		const port = 3000;

		// configuração body-parser
		app.use(bodyParser.urlencoded({extended: false}))
		app.use(bodyParser.json())
		
		// configuração do Handlebars
		app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})); 
        app.set('view engine', 'handlebars');

		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(express.json());
		app.use(router);
		//teclado de emotion tecla win+.
		app.listen(port, () => {
			console.log(`🚗Server is runing on http://localhost:${port}`);
		});
	})
	.catch(() => console.log('Erro ao conectar no mongoDb'));