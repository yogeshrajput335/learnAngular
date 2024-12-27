import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MongoConnectService } from './mongo-connect.service';

describe('MongoConnectService', () => {
  let service: MongoConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MongoConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
