import {Component} from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {PipesComponent} from "./pipes/pipes.component";
import {HttpClientModule} from "@angular/common/http";
import {DoctorService} from "./doctor.service";


@Component({
    standalone: true,
    selector: 'app-root',
    imports: [
        HomeComponent,
        PipesComponent,
        HttpClientModule,
        JsonPipe,
        NgIf
    ],
    template: `
        <main>
            <header class="brand-name">
                <img src="../assets/sdaia-logo.png" class="brand-logo" alt="logo" aria-hidden="true"/>
            </header>
            <section>
                <app-pipes></app-pipes>
            </section>
            <div *ngIf="data">
                <h2> Doctors Response Data </h2>
                <pre> {{ data | json }} </pre>
            </div>

        </main>`,
    styleUrls: ['./app.component.css'],
})

export class AppComponent {

    protected data: any[] | undefined;

    constructor(private doctorService: DoctorService) {

    }

    ngOnInit(): void {

        this.doctorService.getAllDoctors().subscribe(doctors => {
            this.data = doctors;

            console.log(this.data);
        })
    }

    title = 'homes';
}
