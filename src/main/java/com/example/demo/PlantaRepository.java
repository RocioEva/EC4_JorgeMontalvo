package com.example.demo;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "planta", path = "planta")
public interface PlantaRepository extends CrudRepository<Planta, Long> {
    
}
