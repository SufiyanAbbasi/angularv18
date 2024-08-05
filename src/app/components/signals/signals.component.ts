import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  firstname = signal("Sufiyan")
  lastName = signal("Abbasi")

  fullName = computed(() => this.firstname() + "" + this.lastName())

  //signal with arrays
  provinceList = signal(['KPK', 'Punjab', 'Sindh', 'Balochistan'])
  addProvince() {
    this.provinceList.set([...this.provinceList(), 'Gilgit'])
  }

  //with datatype
  rollNo = signal<number>(12);

  // changeName() {
  //   setTimeout(() => {
  //     this.firstname.set("React 19");
  //   }, 5000)
  // }

  changefName() {
    this.firstname.set("Suleman")
  }
  changelName() {
    this.lastName.set('Tahir')
  }
}
