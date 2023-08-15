import {Component, Input, SimpleChanges} from '@angular/core';
import {PaginationService} from "../../service/pagination/pagination.service";
import {Page} from "../../dto/Page";

@Component({
  selector: 'app-pagination-nav-component',
  templateUrl: './pagination-nav-component.component.html',
  styleUrls: ['./pagination-nav-component.component.css']
})
export class PaginationNavComponentComponent {
  @Input()
  public page:Page<any>|undefined;
  public pageCount = 1;
  public activePage = 1;
  protected pagesSet:number[] = []


  constructor(private PaginationService: PaginationService) {
    this.PaginationService.setActivePage(1);
    this.PaginationService.activePage$.subscribe(page=>{
      this.activePage = page;
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['page'] && changes['page'].currentValue) {
      this.pageCount = <number>this.page?.totalPages
      this.PaginationService.maxPage = <number>this.page?.totalPages
      this.setPageSet()
    }
  }

  setPageSet() {
    let pagesSet: number[] = []
    if(1 == this.activePage){
      pagesSet.push(this.activePage)
      if(this.activePage+1 <= this.pageCount)
        pagesSet.push(this.activePage+1)
      if(this.activePage+2 <= this.pageCount)
        pagesSet.push(this.activePage+2)
    }else{
      if(this.activePage == this.pageCount){
        if(this.activePage-2 >= 1)
          pagesSet.push(this.activePage-2)
        if(this.activePage-1 >= 1)
          pagesSet.push(this.activePage-1)
        pagesSet.push(this.activePage)
      }else{
        pagesSet.push(this.activePage-1)
        pagesSet.push(this.activePage)
        if(this.activePage+1 <= this.pageCount)
          pagesSet.push(this.activePage+1)
      }
    }
    this.pagesSet = pagesSet
  }


  setCurrentPage(num: number) {
    if (num >= this.pageCount)
      num = this.pageCount
    else if (num < 1)
      num = 1
    this.PaginationService.setActivePage(num);
    this.setPageSet()
  }
}
