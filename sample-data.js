// Dades de prova: s'utilitzen només mentre SHEET_ID és buit a index.html.
// Mateixa forma que el full: una llista de files per pestanya, amb les capçaleres com a claus.
// Estat, Valoració, Ressenya i anys de compra són inventats.

window.SAMPLE_BOOKS = {
  'Ortín': [
    { 'ISBN': '9788423342839', 'Títol': 'El quadern gris', 'Autors': 'Josep Pla', 'Any compra': 2018, 'Estat': 'Llegit', 'Valoració': 5, 'Editorial': 'Destino', 'Any publicació': 1966, 'Idioma': 'ES', 'Gènere': 'Dietari', 'Ressenya': 'Prosa neta i observació minuciosa. Un dels llibres que més he rellegit.', 'Nota': 'Nota privada de prova' },
    { 'ISBN': '9788499300870', 'Títol': 'Petons de diumenge', 'Autors': 'Sílvia Soler', 'Any compra': 2021, 'Estat': 'Llegit', 'Valoració': 3.5, 'Editorial': 'labutxaca', 'Any publicació': 2019, 'Idioma': 'CA', 'Gènere': 'Novel·la' },
    { 'ISBN': '9788439730491', 'Títol': 'Umami', 'Autors': 'Laia Jufresa', 'Any compra': 2023, 'Estat': 'Llegint', 'Editorial': 'Penguin Random House', 'Any publicació': 2015, 'Idioma': 'ES', 'Gènere': 'Novel·la' },
    { 'ISBN': '9788475883441', 'Títol': 'La mirada de pedra', 'Autors': 'Àlex Broch i Huesa', 'Any compra': 2024, 'Estat': 'Pendent', 'Editorial': 'Proa', 'Any publicació': 2013, 'Idioma': 'CA' },
    { 'ISBN': '9788433920423', 'Títol': 'La conjura de los necios', 'Autors': 'John Kennedy Toole', 'Any compra': 2019, 'Estat': 'Llegit', 'Valoració': 4.5, 'Editorial': 'Anagrama', 'Any publicació': 1980, 'Idioma': 'ES', 'Gènere': 'Novel·la', 'Ressenya': 'Ignatius J. Reilly és inoblidable.' },
    { 'ISBN': '9780307474728', 'Títol': 'Cien años de soledad', 'Autors': 'Gabriel García Márquez', 'Any compra': 2015, 'Estat': 'Llegit', 'Valoració': 5, 'Editorial': 'Vintage Español', 'Any publicació': 1967, 'Idioma': 'ES', 'Gènere': 'Novel·la' },
    { 'ISBN': '9780679720201', 'Títol': 'The Stranger', 'Autors': 'Albert Camus', 'Any compra': 2016, 'Estat': 'Llegit', 'Valoració': 4, 'Editorial': 'Vintage International', 'Any publicació': 1942, 'Idioma': 'EN', 'Gènere': 'Novel·la' },
    { 'ISBN': '9780141439518', 'Títol': 'Pride and Prejudice', 'Autors': 'Jane Austen', 'Any compra': 2012, 'Estat': 'Llegit', 'Valoració': 4, 'Editorial': 'Penguin Books', 'Any publicació': 1813, 'Idioma': 'EN', 'Gènere': 'Novel·la' },
    { 'ISBN': '9780385490818', 'Títol': "The Handmaid's Tale", 'Autors': 'Margaret Atwood', 'Any compra': 2020, 'Estat': 'Llegit', 'Valoració': 4.5, 'Editorial': 'Anchor Books', 'Any publicació': 1985, 'Idioma': 'EN', 'Gènere': 'Distopia' },
    { 'ISBN': '9780374533557', 'Títol': 'Thinking, Fast and Slow', 'Autors': 'Daniel Kahneman', 'Any compra': 2022, 'Estat': 'Pendent', 'Editorial': 'Farrar, Straus and Giroux', 'Any publicació': 2011, 'Idioma': 'EN', 'Gènere': 'Assaig' },
    { 'ISBN': '9780099590088', 'Títol': 'Sapiens', 'Autors': 'Yuval Noah Harari', 'Any compra': 2017, 'Estat': 'Llegit', 'Valoració': 3.5, 'Editorial': 'Vintage Books', 'Any publicació': 2011, 'Idioma': 'EN', 'Gènere': 'Assaig' },
    { 'Títol': 'Un llibre sense ISBN', 'Autors': 'Autor Exemple; Segon Autor', 'Portada': 'https://covers.openlibrary.org/b/isbn/9780525559474-M.jpg', 'Any compra': 2022, 'Estat': 'Pendent', 'Editorial': 'Editorial Exemple', 'Any publicació': 2021, 'Idioma': 'CA', 'Gènere': 'Assaig', 'Ressenya': 'Prova: portada manual des de la columna Portada, sense ISBN.' },
    { 'Títol': 'Llibre sense cap portada', 'Autors': 'Autora Imaginària', 'Any compra': 2010, 'Estat': 'Llegit', 'Valoració': 2.5, 'Idioma': 'CA', 'Gènere': 'Poesia' }
  ],
  'Escudé': [
    { 'ISBN': '9780140449136', 'Títol': 'Crime and Punishment', 'Autors': 'Fyodor Dostoevsky', 'Any compra': 2014, 'Estat': 'Llegit', 'Valoració': 5, 'Editorial': 'Penguin', 'Any publicació': 1866, 'Idioma': 'EN', 'Gènere': 'Novel·la' },
    { 'ISBN': '9780061120084', 'Títol': 'To Kill a Mockingbird', 'Autors': 'Harper Lee', 'Any compra': 2013, 'Estat': 'Llegit', 'Valoració': 4.5, 'Editorial': 'Harper Perennial', 'Any publicació': 1960, 'Idioma': 'EN', 'Gènere': 'Novel·la' },
    { 'ISBN': '978-0-451-52493-5', 'Títol': '1984', 'Autors': 'George Orwell', 'Any compra': 2011, 'Estat': 'Llegit', 'Valoració': 5, 'Editorial': 'Signet Classic', 'Any publicació': 1949, 'Idioma': 'EN', 'Gènere': 'Distopia', 'Ressenya': 'Prova: ISBN escrit amb guions al full.' },
    { 'ISBN': '9780743273565', 'Títol': 'The Great Gatsby', 'Autors': 'F. Scott Fitzgerald', 'Any compra': 2012, 'Estat': 'Llegit', 'Valoració': 3.5, 'Editorial': 'Scribner', 'Any publicació': 1925, 'Idioma': 'EN', 'Gènere': 'Novel·la' },
    { 'ISBN': '9780544003415', 'Títol': 'The Lord of the Rings', 'Autors': 'J. R. R. Tolkien', 'Any compra': 2025, 'Estat': 'Llegint', 'Editorial': 'Houghton Mifflin', 'Any publicació': 1954, 'Idioma': 'EN', 'Gènere': 'Fantasia' },
    { 'ISBN': '9780547928227', 'Títol': 'The Hobbit', 'Autors': 'J. R. R. Tolkien', 'Any compra': 2024, 'Estat': 'Llegit', 'Valoració': 4, 'Editorial': 'Mariner Books', 'Any publicació': 1937, 'Idioma': 'EN', 'Gènere': 'Fantasia' },
    { 'ISBN': '9780307387899', 'Títol': 'The Road', 'Autors': 'Cormac McCarthy', 'Any compra': 2019, 'Estat': 'Llegit', 'Valoració': 4, 'Editorial': 'Vintage Books', 'Any publicació': 2006, 'Idioma': 'EN', 'Gènere': 'Novel·la' },
    { 'ISBN': '9780316769488', 'Títol': 'The Catcher in the Rye', 'Autors': 'J. D. Salinger', 'Any compra': 2010, 'Estat': 'Llegit', 'Valoració': 3, 'Editorial': 'Little, Brown and Company', 'Any publicació': 1951, 'Idioma': 'EN', 'Gènere': 'Novel·la' },
    { 'ISBN': '9781400033416', 'Títol': 'Beloved', 'Autors': 'Toni Morrison', 'Any compra': 2023, 'Estat': 'Pendent', 'Editorial': 'Vintage International', 'Any publicació': 1987, 'Idioma': 'EN', 'Gènere': 'Novel·la' },
    { 'ISBN': '9780375704024', 'Títol': 'Norwegian Wood', 'Autors': 'Haruki Murakami', 'Any compra': 2021, 'Estat': 'Llegit', 'Valoració': 4, 'Editorial': 'Vintage', 'Any publicació': 1987, 'Idioma': 'EN', 'Gènere': 'Novel·la' },
    { 'ISBN': '9788497593793', 'Títol': 'It (Eso)', 'Autors': 'Stephen King', 'Any compra': 2016, 'Estat': 'Llegit', 'Valoració': 3.5, 'Editorial': 'Debolsillo', 'Any publicació': 1986, 'Idioma': 'ES', 'Gènere': 'Terror' },
    { 'ISBN': '9780525559474', 'Títol': 'The Midnight Library', 'Autors': 'Matt Haig', 'Portada': 'https://example.invalid/portada-trencada.jpg', 'Any compra': 2022, 'Estat': 'Llegit', 'Valoració': 3, 'Editorial': 'Viking', 'Any publicació': 2020, 'Idioma': 'EN', 'Gènere': 'Novel·la', 'Ressenya': 'Prova: Portada trencada, ha de caure a Open Library.' },
    { 'ISBN': '9780099590088', 'Títol': 'Sapiens', 'Autors': 'Yuval Noah Harari', 'Any compra': 2018, 'Estat': 'Llegit', 'Valoració': 4, 'Editorial': 'Vintage Books', 'Any publicació': 2011, 'Idioma': 'EN', 'Gènere': 'Assaig', 'Ressenya': 'Prova: el mateix llibre és a les dues pestanyes.' },
    { 'ISBN': '9780062316097', 'Títol': 'Sapiens: A Brief History of Humankind', 'Autors': 'Yuval Noah Harari', 'Any compra': 2016, 'Estat': 'Pendent', 'Editorial': 'Harper', 'Any publicació': 2015, 'Idioma': 'EN', 'Gènere': 'Assaig' },
    { 'ISBN': '9788420471839', 'Títol': 'Cien años de soledad', 'Autors': 'Gabriel García Márquez', 'Any compra': 2009, 'Estat': 'Llegit', 'Valoració': 4.5, 'Editorial': 'Alfaguara', 'Any publicació': 1967, 'Idioma': 'ES', 'Gènere': 'Novel·la' }
  ]
};
