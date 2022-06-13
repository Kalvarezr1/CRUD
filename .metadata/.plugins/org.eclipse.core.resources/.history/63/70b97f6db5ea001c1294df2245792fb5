package com.example.tecnoShop.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.tecnoShop.model.Cliente;
import com.example.tecnoShop.service.ClienteService;
import com.fasterxml.jackson.annotation.JsonValue;


@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("api/cliente")
public class ClienteController {
	
	private final ClienteService clienteService;
	
	public ClienteController(@Autowired ClienteService clienteService) {
		this.clienteService=clienteService;
	}
	
	@GetMapping("/{id}")
	public Cliente getCliente(@PathVariable Integer id) {
		return clienteService.getCliente(id);
	}
	
	@GetMapping("/all")
	public List<Cliente> getClientes(){
		return clienteService.getClientes();
	}
	
	@GetMapping("/validaCredenciales")
	public Cliente validaCredenciales(
			@RequestBody String contrasenia,
			@RequestParam(name = "email",required = false)String email) {
		System.out.println(contrasenia + " "+email);
		return clienteService.validaCredenciales(contrasenia, email);
	}
	
	// Escribir 
	@PostMapping
	public Cliente saveClientes(@RequestBody Cliente cliente) {
		System.out.println(cliente);
		return clienteService.saveCliente(cliente);
	}
	
	// Borrar
	@DeleteMapping("delete/{id}")
	public void deleteCliente(@PathVariable Integer id) {
		clienteService.deleteCliente(id);
	}
	
	// Actualizar
	@PutMapping
	public Cliente updateCliente(@RequestBody Cliente cliente) {
		return clienteService.updateCliente(cliente);
	}
	
	
}
