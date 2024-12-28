import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MongoConnectService } from './mongodb-connect-services-new.service';

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