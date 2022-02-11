package edu.nerea.entornoCliente.mangadb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.nerea.entornoCliente.mangadb.entity.Autor;
import edu.nerea.entornoCliente.mangadb.service.IAutorService;

@RestController
@RequestMapping("/autor")
public class AutorController {

		@Autowired
		private IAutorService serviceAutor;
		
		@GetMapping("/autores")
		public List<Autor> buscarAutores(){
			return serviceAutor.buscarAutores();
		}
}
