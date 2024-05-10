package nl.hva.foryou.service.task;

import jakarta.transaction.Transactional;
import nl.hva.foryou.presistence.domain.task.TaskContactInfo;
import nl.hva.foryou.presistence.repository.TaskContactInfoRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskContactInfoService {

    private final TaskContactInfoRepository taskContactInfoRepository;

    public TaskContactInfoService(TaskContactInfoRepository taskContactInfoRepository) {
        this.taskContactInfoRepository = taskContactInfoRepository;
    }

    @Transactional
    public void createTaskContactInfo(TaskContactInfo taskContactInfo) {
        taskContactInfoRepository.save(taskContactInfo);
    }


}
