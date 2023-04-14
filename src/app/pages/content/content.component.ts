import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://68.media.tumblr.com/ea520ed97eeaf37fd61f8f03d3425f0a/tumblr_namir0nUaK1t3af0ro1_500.gif";
  contentTitle: string = "EIN";
  contentDescription: string = "um cachorro inteligente e modificado geneticamente que também faz parte da tripulação da nave Bebop.";
  private id:string | null = "0";
  constructor(
     private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get("id"))
    )
  }

}
