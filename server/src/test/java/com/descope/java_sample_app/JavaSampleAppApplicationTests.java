package com.descope.java_sample_app;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@TestPropertySource(properties = {
    "DESCOPE_PROJECT_ID=test-project-id"
})

class JavaSampleAppApplicationTests {

	@Test
	void contextLoads() {
	}

}
