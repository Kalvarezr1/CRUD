package com.example.tecnoShop.repository;

import java.util.List;
import java.util.Map;

import javax.persistence.OrderBy;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.tecnoShop.model.Cliente;


@Repository 
public interface ClienteRepository extends JpaRepository<Cliente,Integer> {
	
//	@Query(value = "SELECT * FROM producto order by vendido limit 12", nativeQuery = true)
//	List<Map<String,Object>> getMasVendidos();
	
	@Query(value = "SELECT * FROM cliente WHERE contrasenia = ?1 and email = ?2;" ,nativeQuery=true)
	Cliente validaCredenciales(String contrasenia,String email);
	

}
