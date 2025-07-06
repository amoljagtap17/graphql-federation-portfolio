import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Benchmark } from "./entities/benchmark.entity";

@Injectable()
export class BenchmarkService {
	constructor(
		@InjectRepository(Benchmark)
		private readonly benchmarkRepository: Repository<Benchmark>,
	) {}

	async getAllBenchmarks(): Promise<Benchmark[]> {
		return this.benchmarkRepository.find();
	}

	async getBenchmarkById(id: string): Promise<Benchmark | null> {
		return this.benchmarkRepository.findOneBy({
			id,
		});
	}
}
