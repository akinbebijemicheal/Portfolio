const fs = require('fs');
let html = fs.readFileSync('c:/Users/miche/OneDrive/Desktop/Micheal_Portfolio/index.htm', 'utf8');

const newSection = `<!-- Fullstack Skills -->
                            <p class="scroll-animation" data-animation="fade_from_bottom" style="font-size:13px;letter-spacing:2px;text-transform:uppercase;opacity:.6;margin-bottom:20px;margin-top:10px;">&#9472;&#9472; Fullstack Engineering</p>
                            <div class="row skills text-center">
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_left">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React">
                                            <h2 class="percent">90%</h2>
                                        </div>
                                        <p class="name">React.js / Vue.js</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js">
                                            <h2 class="percent">92%</h2>
                                        </div>
                                        <p class="name">Node.js / Express</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_top">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP">
                                            <h2 class="percent">88%</h2>
                                        </div>
                                        <p class="name">PHP / Laravel</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_right">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java">
                                            <h2 class="percent">85%</h2>
                                        </div>
                                        <p class="name">Java / Golang</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_left">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL">
                                            <h2 class="percent">87%</h2>
                                        </div>
                                        <p class="name">MySQL / MongoDB / PostgreSQL</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker">
                                            <h2 class="percent">82%</h2>
                                        </div>
                                        <p class="name">Docker / AWS / GCP</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_left">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5">
                                            <h2 class="percent">95%</h2>
                                        </div>
                                        <p class="name">HTML / CSS / JavaScript</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap">
                                            <h2 class="percent">84%</h2>
                                        </div>
                                        <p class="name">Redux / jQuery / Bootstrap</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_top">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git">
                                            <h2 class="percent">86%</h2>
                                        </div>
                                        <p class="name">Git / CI/CD / Kubernetes</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_right">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes">
                                            <h2 class="percent">83%</h2>
                                        </div>
                                        <p class="name">Microservices / OOP / Agile</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Data Science Skills -->
                            <p class="scroll-animation" data-animation="fade_from_bottom" style="font-size:13px;letter-spacing:2px;text-transform:uppercase;opacity:.6;margin-bottom:20px;margin-top:40px;">&#9472;&#9472; Data Science &amp; Analytics</p>
                            <div class="row skills text-center">
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_left">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python">
                                            <h2 class="percent">80%</h2>
                                        </div>
                                        <p class="name">Python</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas">
                                            <h2 class="percent">78%</h2>
                                        </div>
                                        <p class="name">Data Analytics &amp; Pipelines</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_top">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow">
                                            <h2 class="percent">75%</h2>
                                        </div>
                                        <p class="name">Machine Learning / AI Models</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_right">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://img.icons8.com/color/96/bar-chart.png" alt="Analytics">
                                            <h2 class="percent">76%</h2>
                                        </div>
                                        <p class="name">Data-Driven Decision Making</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Leadership & Soft Skills -->
                            <p class="scroll-animation" data-animation="fade_from_bottom" style="font-size:13px;letter-spacing:2px;text-transform:uppercase;opacity:.6;margin-bottom:20px;margin-top:40px;">&#9472;&#9472; Leadership &amp; Soft Skills</p>
                            <div class="row skills text-center">
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_left">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://img.icons8.com/color/96/conference-call.png" alt="Leadership">
                                            <h2 class="percent">92%</h2>
                                        </div>
                                        <p class="name">Team Leadership &amp; Mentoring</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://img.icons8.com/color/96/idea.png" alt="Problem Solving">
                                            <h2 class="percent">95%</h2>
                                        </div>
                                        <p class="name">Problem Solving &amp; Creativity</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_top">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://img.icons8.com/color/96/communication.png" alt="Communication">
                                            <h2 class="percent">90%</h2>
                                        </div>
                                        <p class="name">Communication &amp; Collaboration</p>
                                    </div>
                                </div>
                                <div class="col-md-3 scroll-animation" data-animation="fade_from_right">
                                    <div class="skill">
                                        <div class="skill-inner">
                                            <img decoding="async" src="https://img.icons8.com/color/96/increase-profits.png" alt="Strategy">
                                            <h2 class="percent">88%</h2>
                                        </div>
                                        <p class="name">Product Metrics &amp; Strategy</p>
                                    </div>
                                </div>
                            </div>`;

const startIdx = html.indexOf('<!-- Fullstack Skills -->');
const endMarker = '</div>\n        \n                        </div>';
const endIdx = html.indexOf(endMarker, startIdx) + 6;

console.log('startIdx:', startIdx, 'endIdx:', endIdx);
console.log('Old section preview:', JSON.stringify(html.substring(startIdx, startIdx + 50)));
console.log('End marker at:', html.indexOf(endMarker, startIdx));

const newHtml = html.substring(0, startIdx) + newSection + html.substring(endIdx);
fs.writeFileSync('c:/Users/miche/OneDrive/Desktop/Micheal_Portfolio/index.htm', newHtml, 'utf8');
console.log('Done! File written successfully.');
