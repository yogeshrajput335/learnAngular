import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'built_dir',
    templateUrl: './built_dir.html',

    imports: [CommonModule, FormsModule],
    styleUrl: './built_dir.css'
})

export class BuiltDirComponent {
    list = ['Bullet', 'Fz', 'Tvs', 'R15']
    show = "AMOUNT"
    isShow = false;
    hasMyClass = true;

    myColor = "pink"
    ChangeColor() {
        this.isShow = !this.isShow;
        this.hasMyClass = !this.hasMyClass;
        this.myColor = "green"
        alert(this.show)
    }

}