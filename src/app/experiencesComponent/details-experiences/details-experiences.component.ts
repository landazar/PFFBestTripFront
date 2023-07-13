import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experiences } from 'src/app/Model/experiences';
import { ExperiencesService } from 'src/app/Service/experiences.service';

@Component({
  selector: 'app-details-experiences',
  templateUrl: './details-experiences.component.html',
  styleUrls: ['./details-experiences.component.css']
})
export class DetailsExperiencesComponent implements OnInit {
  experience!: Experiences;

  constructor(
    private route: ActivatedRoute,
    private experiencesService: ExperiencesService
  ) { }

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences(): void {
    this.route.paramMap.subscribe(params => {
      const idExperience = +params.get('idExperience')!;
      this.experiencesService.getExperiencesById(idExperience).subscribe((experience: Experiences) => {
        console.log(experience.activites);
        this.experience = experience;
      });
    });
  }
}
