import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type VariantType = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

@Component({
  selector: 'app-listgroup',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './listgroup.component.html',
  styleUrl: './listgroup.component.css',
})
export class ListgroupComponent {
  @Input() variant: VariantType = "light";
  @Input() data: any[] = [];
 }
