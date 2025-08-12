import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlanosService } from '../services/planos.service';

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {
  planos: any[] = [];
  filtro: string = '';
  ordemSelecionada: string = ''; 

  constructor(private planosService: PlanosService) {}

  ngOnInit(): void {
    this.planosService.getPlanos().subscribe({
      next: (dados) => {
        this.planos = dados;
      },
      error: (erro) => {
        console.error('Erro ao carregar os planos:', erro);
      }
    });
  }

  get planosFiltrados() {
    let filtrados = this.planos;

    if (this.filtro) {
      filtrados = filtrados.filter(plano =>
        plano.nome.toLowerCase().includes(this.filtro.toLowerCase()) ||
        plano.descricao.toLowerCase().includes(this.filtro.toLowerCase())
      );
    }

    if (this.ordemSelecionada === 'menor') {
      filtrados = [...filtrados].sort((a, b) => a.preco - b.preco);
    } else if (this.ordemSelecionada === 'maior') {
      filtrados = [...filtrados].sort((a, b) => b.preco - a.preco);
    }

    return filtrados;
  }
}
