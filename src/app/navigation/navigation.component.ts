import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  // @ts-ignore
  @Input() title: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(location: string): void {
    console.log(location);
    this.router.navigateByUrl(location);
  }
}
