import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buynow1',
  templateUrl: './buynow1.component.html',
  styleUrls: ['./buynow1.component.css']
})
export class Buynow1Component implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public amount:number=1;
  public totalprice:number=0;
reservation(a:string){
  if(a=='a')
  this.totalprice=500;
  else if(a=='b')
  this.totalprice=750;
  else if(a=='c')
  this.totalprice=1000;
  this.amount=1;
}
addticket(){
  this.amount=this.amount+1;
  this.totalprice=this.totalprice*this.amount;
}

removeticket(){
  this.amount=this.amount-1;
  this.totalprice=this.totalprice*this.amount;
}
  username='';
  emaill='';
  adresss='';
  cityy='';
  statee='';
  zipp='';
  cnamee='';
  cnumm='';
  expmm='';
  expyy='';
  cvvv='';
  uname=false;
  email=false;
  adress=false;
  city=false;
  state=false;
  zip=false;
  cname=false;
  cnum=false;
  expm=false;
  expy=false;
  cvv=false;
  
  check(){
    
    if(this.username.length==0 || !isNaN(parseFloat(this.username))){
    this.uname=true;}
    else{
      this.uname=false;
    }
  
    if(this.emaill.length==0 || !isNaN(parseFloat(this.emaill)) || this.emaill.indexOf('@')<0){
      this.email=true;}
      else{
        this.email=false;
      }
  
      if(this.adresss.length==0){
        this.adress=true;}
        else{
          this.adress=false;
        }
        if(this.adresss.length==0){
          this.adress=true;}
          else{
            this.adress=false;
          }
          if(this.cityy.length==0 || !isNaN(parseFloat(this.cityy))){
            this.city=true;}
            else{
              this.city=false;
            }
            if(this.statee.length==0 || !isNaN(parseFloat(this.statee))){
              this.state=true;}
              else{
                this.state=false;
              }
              if(this.zipp.length==0 || isNaN(parseFloat(this.zipp))){
                this.zip=true;}
                else{
                  this.zip=false;
                }
                if(this.cnamee.length==0 || !isNaN(parseFloat(this.cnamee))){
                  this.cname=true;}
                  else{
                    this.cname=false;
                  }
                  if(this.cnumm.length!=16 || isNaN(parseFloat(this.cnumm))){
                    this.cnum=true;}
                    else{
                      this.cnum=false;
                    }
                    if(this.expmm.length!=2 || isNaN(parseFloat(this.expmm)) || (parseFloat(this.expmm))>12 || (parseFloat(this.expmm))<1){
                      this.expm=true;}
                      else{
                        this.expm=false;
                      }
                      if(this.expyy.length!=4 ||isNaN(parseFloat(this.expyy)) ){
                        this.expy=true;}
                        else{
                          this.expy=false;
                        }
                        if(this.cvvv.length!=3 ||isNaN(parseFloat(this.expyy)) ){
                          this.cvv=true;}
                          else{
                            this.cvv=false;
                          }
  
                          if(this.uname==false &&
                            this.email==false &&
                            this.adress==false &&
                            this.city==false &&
                            this.state==false &&
                            this.zip==false &&
                            this.cname==false &&
                            this.cnum==false &&
                            this.expm==false &&
                            this.expy==false &&
                            this.cvv==false){
                              this.suc=true;
                            }
                            else{
                              this.suc=false;
                            }
    }
    suc:boolean=false;
  
  }
  