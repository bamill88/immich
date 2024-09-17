import { IAccessRepository } from 'src/interfaces/access.interface';
import { IActivityRepository } from 'src/interfaces/activity.interface';
import { IAlbumUserRepository } from 'src/interfaces/album-user.interface';
import { IAlbumRepository } from 'src/interfaces/album.interface';
import { IKeyRepository } from 'src/interfaces/api-key.interface';
import { IAssetRepository } from 'src/interfaces/asset.interface';
import { IAuditRepository } from 'src/interfaces/audit.interface';
import { ICryptoRepository } from 'src/interfaces/crypto.interface';
import { IDatabaseRepository } from 'src/interfaces/database.interface';
import { IEventRepository } from 'src/interfaces/event.interface';
import { IJobRepository } from 'src/interfaces/job.interface';
import { ILibraryRepository } from 'src/interfaces/library.interface';
import { ILoggerRepository } from 'src/interfaces/logger.interface';
import { IMachineLearningRepository } from 'src/interfaces/machine-learning.interface';
import { IMapRepository } from 'src/interfaces/map.interface';
import { IMediaRepository } from 'src/interfaces/media.interface';
import { IMemoryRepository } from 'src/interfaces/memory.interface';
import { IMetadataRepository } from 'src/interfaces/metadata.interface';
import { IMetricRepository } from 'src/interfaces/metric.interface';
import { IMoveRepository } from 'src/interfaces/move.interface';
import { INotificationRepository } from 'src/interfaces/notification.interface';
import { IPartnerRepository } from 'src/interfaces/partner.interface';
import { IPersonRepository } from 'src/interfaces/person.interface';
import { ISearchRepository } from 'src/interfaces/search.interface';
import { IServerInfoRepository } from 'src/interfaces/server-info.interface';
import { ISessionRepository } from 'src/interfaces/session.interface';
import { ISharedLinkRepository } from 'src/interfaces/shared-link.interface';
import { IStackRepository } from 'src/interfaces/stack.interface';
import { IStorageRepository } from 'src/interfaces/storage.interface';
import { ISystemMetadataRepository } from 'src/interfaces/system-metadata.interface';
import { ITagRepository } from 'src/interfaces/tag.interface';
import { IUserRepository } from 'src/interfaces/user.interface';
import { IViewRepository } from 'src/interfaces/view.interface';
import { AccessRepository } from 'src/repositories/access.repository';
import { ActivityRepository } from 'src/repositories/activity.repository';
import { AlbumUserRepository } from 'src/repositories/album-user.repository';
import { AlbumRepository } from 'src/repositories/album.repository';
import { ApiKeyRepository } from 'src/repositories/api-key.repository';
import { AssetRepository } from 'src/repositories/asset.repository';
import { AuditRepository } from 'src/repositories/audit.repository';
import { CryptoRepository } from 'src/repositories/crypto.repository';
import { DatabaseRepository } from 'src/repositories/database.repository';
import { EventRepository } from 'src/repositories/event.repository';
import { JobRepository } from 'src/repositories/job.repository';
import { LibraryRepository } from 'src/repositories/library.repository';
import { LoggerRepository } from 'src/repositories/logger.repository';
import { MachineLearningRepository } from 'src/repositories/machine-learning.repository';
import { MapRepository } from 'src/repositories/map.repository';
import { MediaRepository } from 'src/repositories/media.repository';
import { MemoryRepository } from 'src/repositories/memory.repository';
import { MetadataRepository } from 'src/repositories/metadata.repository';
import { MetricRepository } from 'src/repositories/metric.repository';
import { MoveRepository } from 'src/repositories/move.repository';
import { NotificationRepository } from 'src/repositories/notification.repository';
import { PartnerRepository } from 'src/repositories/partner.repository';
import { PersonRepository } from 'src/repositories/person.repository';
import { SearchRepository } from 'src/repositories/search.repository';
import { ServerInfoRepository } from 'src/repositories/server-info.repository';
import { SessionRepository } from 'src/repositories/session.repository';
import { SharedLinkRepository } from 'src/repositories/shared-link.repository';
import { StackRepository } from 'src/repositories/stack.repository';
import { StorageRepository } from 'src/repositories/storage.repository';
import { SystemMetadataRepository } from 'src/repositories/system-metadata.repository';
import { TagRepository } from 'src/repositories/tag.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { ViewRepository } from 'src/repositories/view-repository';

export const repositories = [
  { provide: IAccessRepository, useClass: AccessRepository },
  { provide: IActivityRepository, useClass: ActivityRepository },
  { provide: IAlbumRepository, useClass: AlbumRepository },
  { provide: IAlbumUserRepository, useClass: AlbumUserRepository },
  { provide: IAssetRepository, useClass: AssetRepository },
  { provide: IAuditRepository, useClass: AuditRepository },
  { provide: ICryptoRepository, useClass: CryptoRepository },
  { provide: IDatabaseRepository, useClass: DatabaseRepository },
  { provide: IEventRepository, useClass: EventRepository },
  { provide: IJobRepository, useClass: JobRepository },
  { provide: IKeyRepository, useClass: ApiKeyRepository },
  { provide: ILibraryRepository, useClass: LibraryRepository },
  { provide: ILoggerRepository, useClass: LoggerRepository },
  { provide: IMachineLearningRepository, useClass: MachineLearningRepository },
  { provide: IMapRepository, useClass: MapRepository },
  { provide: IMediaRepository, useClass: MediaRepository },
  { provide: IMemoryRepository, useClass: MemoryRepository },
  { provide: IMetadataRepository, useClass: MetadataRepository },
  { provide: IMetricRepository, useClass: MetricRepository },
  { provide: IMoveRepository, useClass: MoveRepository },
  { provide: INotificationRepository, useClass: NotificationRepository },
  { provide: IPartnerRepository, useClass: PartnerRepository },
  { provide: IPersonRepository, useClass: PersonRepository },
  { provide: ISearchRepository, useClass: SearchRepository },
  { provide: IServerInfoRepository, useClass: ServerInfoRepository },
  { provide: ISessionRepository, useClass: SessionRepository },
  { provide: ISharedLinkRepository, useClass: SharedLinkRepository },
  { provide: IStackRepository, useClass: StackRepository },
  { provide: IStorageRepository, useClass: StorageRepository },
  { provide: ISystemMetadataRepository, useClass: SystemMetadataRepository },
  { provide: ITagRepository, useClass: TagRepository },
  { provide: IUserRepository, useClass: UserRepository },
  { provide: IViewRepository, useClass: ViewRepository },
];
