package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final PlantaRepository repositoryI;


	@Autowired
	public DatabaseLoader(
		PlantaRepository repositoryI
		) {
		this.repositoryI = repositoryI;
		
	}

	@Override
	public void run(String... strings) throws Exception {

		this.repositoryI.save(new Planta("Rosa", "color rosa", "una planta muy romantica"));
		this.repositoryI.save(new Planta("Girasol","color amarillo","muy amarilla y grande"));
		this.repositoryI.save(new Planta("Margarita","color blanco","una planta con un nombre muy alegre"));
		Planta iGarnedia = new Planta("Gardenia","color blanco","considera la planta de la paz");
		this.repositoryI.save(iGarnedia);
		Planta iRuda = new Planta("Ruda","oscuro", "muy beneficiosa");
		this.repositoryI.save(iRuda);
		this.repositoryI.save(new Planta("Cactus","verdes","tiene propiedades curativas"));

		




	}
}