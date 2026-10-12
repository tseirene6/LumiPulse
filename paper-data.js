/* LumiPulse content. */
window.LUMIPULSE_PAPER_LIBRARY = {
  "domains": [
    {
      "id": "multimodal-embodied",
      "name": "多模态大模型与具身智能",
      "caption": "MULTIMODAL / EMBODIED",
      "description": "关注多模态理解与生成，以及模型如何感知、决策并在真实或模拟环境中行动。",
      "readingGroup": "primary"
    },
    {
      "id": "physics-world-model",
      "name": "物理仿真与世界模型",
      "caption": "SIMULATION / WORLD MODELS",
      "description": "关注物理过程的模拟、环境动力学的学习，以及对行动后果的预测。",
      "readingGroup": "primary"
    },
    {
      "id": "ai4s",
      "name": "AI4S",
      "caption": "SCIENCE / AI FOR AI",
      "description": "从科学应用到 AI 自身改进，按具体问题继续细分。",
      "topics": [
        {
          "id": "virtual-cell",
          "name": "虚拟细胞"
        },
        {
          "id": "eeg",
          "name": "脑电"
        },
        {
          "id": "medical-imaging",
          "name": "医学影像"
        },
        {
          "id": "protein-enzyme",
          "name": "蛋白质与酶"
        },
        {
          "id": "rsi-ai4ai",
          "name": "RSI（AI4AI）"
        }
      ],
      "readingGroup": "primary"
    },
    {
      "id": "agent",
      "name": "Agent",
      "caption": "AGENTS / TOOL USE",
      "description": "关注智能体如何调用工具、规划步骤、协作并完成任务。",
      "readingGroup": "primary"
    },
    {
      "id": "computer-vision",
      "name": "计算机视觉",
      "caption": "COMPUTER VISION",
      "description": "关注视觉表征、图像理解、目标识别以及三维场景理解。",
      "readingGroup": "explore"
    },
    {
      "id": "generative-models",
      "name": "生成模型",
      "caption": "GENERATIVE MODELS",
      "description": "关注生成模型的学习机制、生成过程与内容控制。",
      "readingGroup": "explore"
    },
    {
      "id": "large-language-models",
      "name": "大语言模型",
      "caption": "LARGE LANGUAGE MODELS",
      "description": "关注语言模型的预训练、推理能力、对齐与能力评估。",
      "readingGroup": "explore"
    },
    {
      "id": "reinforcement-learning",
      "name": "强化学习",
      "caption": "REINFORCEMENT LEARNING",
      "description": "关注智能体如何利用反馈学习决策、优化策略与长期收益。",
      "readingGroup": "explore"
    },
    {
      "id": "efficiency-systems",
      "name": "效率与系统",
      "caption": "EFFICIENCY / SYSTEMS",
      "description": "关注训练与推理效率、计算资源、系统设计以及质量、延迟与成本之间的权衡。",
      "readingGroup": "explore"
    }
  ],
  "papers": [
    {
      "id": "dafi",
      "title": "From Input to Output: A Flexible Agent for Dual-End Interpretation of Sparse Autoencoder Features",
      "shortTitle": "DAFI：从输入、输出到功能联系的 SAE 特征解释",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2026",
      "venue": "arXiv",
      "tags": [
        "SAE",
        "Interpretability",
        "Agent"
      ],
      "question": "怎样同时解释一个 SAE 特征为何被输入激活，以及它又如何影响模型输出？",
      "coreIdea": "把解释拆成输入端、输出端和二者的功能联系，并分别评分。某一维度失败时，Agent 会诊断原因、选择工具、补证据、修订解释，再重新评分；更差的版本可以回滚。",
      "experiment": "在 100 个 GemmaScope SAE 特征上，输入、输出与功能联系三项评分均优于 SAGE；功能联系评分与人工判断一致。短上下文 token probing 也能以更低成本接近大语料检索。",
      "takeaway": "失败原因应触发不同工具。可以把三项评价迁移为“前提是否成立、结果是否成立、二者能否迁移”，并从同一 checkpoint 比较不同分支。",
      "url": "https://arxiv.org/abs/2609.35367",
      "codeUrl": "https://github.com/THUAIS-Lab/DAFI"
    },
    {
      "id": "last-ai-built-by-humans",
      "title": "The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement",
      "shortTitle": "The Last AI Built by Humans：RSI 的总览论文",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2026",
      "venue": "arXiv",
      "tags": [
        "RSI",
        "Survey"
      ],
      "question": "当“自我改进”被用来指答案修订、记忆更新、工具更新和改进器自修改时，怎样判断什么才是真正的 RSI？",
      "coreIdea": "用“当前系统—经验—改进器—候选修改—验证与接纳—后继系统”描述完整闭环，并用 B0–L5 区分自主程度。结构递归要求新策略在后续轮次被继续使用；有效递归还要求公平预算下的后继系统确实更强。",
      "experiment": "这是一篇框架与综述论文，重点是统一概念、梳理系统边界与评价条件，而非报告单一实验。",
      "takeaway": "实验前冻结任务、数据权限、时间锚点、评测器和科学约束；允许策略在边界内变化，并完整记录每一代继承了什么。",
      "url": "https://arxiv.org/abs/2609.11873"
    },
    {
      "id": "dream-rsi",
      "title": "Dream-RSI: Recursive Self-Improvement through Evolving Worlds",
      "shortTitle": "Dream-RSI：用历史发现树改进探索策略",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2026",
      "venue": "arXiv",
      "tags": [
        "RSI",
        "Replay",
        "Search"
      ],
      "question": "真实代码与评测环境中的探索既昂贵又反馈缓慢，能否先在“梦境”里筛掉差的研究策略？",
      "coreIdea": "在线探索先积累发现树，再把历史轨迹构造成可重放的模拟环境。系统在 replay 中提出并筛选多种探索策略，只把更有希望的策略带回真实环境。",
      "experiment": "覆盖算法工程、数学优化、GPU kernel 与 Agent harness 的九组实验。在相同基础模型、评测器、起点和预算下，replay 往往能用更少真实调用找到更好的候选，但效果受历史树覆盖度影响。",
      "takeaway": "把真实研发过程保存成树，用 replay 先筛研究策略，把昂贵的真实预算留给高潜力分支。",
      "url": "https://arxiv.org/abs/2609.14858",
      "codeUrl": "https://github.com/zhengkid/Dream-RSI"
    },
    {
      "id": "sol-pi",
      "title": "SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness",
      "shortTitle": "SoL-Pi：把 Agent 改进本身做成可验证的研究",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2026",
      "venue": "arXiv",
      "tags": [
        "Agent Harness",
        "Efficiency",
        "RSI"
      ],
      "question": "怎样自动优化 Agent harness，在保持能力的同时减少 token、API 调用和执行成本？",
      "coreIdea": "先检查基础 Agent 的轨迹，再让独立分支提出修改、运行和比较。系统最终沉淀出 Action Fusion、Online Context Compact、ObservationPack 与 Evidence-Preserving Reducer 四类可复用机制。",
      "experiment": "约 150 个候选、500 多个环境和 3000 多次运行，覆盖 EdgeBench、Terminal-Bench 4、IMO 2026 与多 Agent kernel。完整版侧重效率，最佳单机制侧重性能。",
      "takeaway": "在相互隔离的 sandbox 中搜索并冻结可复用 harness 修改，同时保留 checkpoint、克隆和回滚能力。",
      "url": "https://arxiv.org/abs/2609.20519",
      "codeUrl": "https://github.com/NVlabs/SoL-Pi"
    },
    {
      "id": "godel-agent",
      "title": "Gödel Agent: A Self-Referential Agent Framework for Recursively Self-Improvement",
      "shortTitle": "Gödel Agent：自指的关键是改进器也进入可修改范围",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2025",
      "venue": "ACL",
      "tags": [
        "Agent",
        "Self-modification",
        "RSI"
      ],
      "question": "一个 Agent 能否读取并重写自己的代码，让改进后的版本在下一轮真正参与任务？",
      "coreIdea": "Agent 检查自身状态、执行并评估任务、修改策略或执行代码，再把新版本用于下一轮，从而把自我修改闭合成真实反馈环。",
      "experiment": "在 DROP、MGSM、MMLU 与 GPQA 上测试。受约束模型在 MGSM 上提升明显，其余任务接近基线；不受约束时会调用更强模型。版本退化并不少见，先分析再行动和错误恢复很关键。",
      "takeaway": "闭环必须包含“修改后的系统被后续真实使用”。每一轮都应保留 checkpoint、克隆、回滚与失败原因。",
      "url": "https://aclanthology.org/2025.acl-long.1354/",
      "codeUrl": "https://github.com/Arvid-pku/Godel_Agent"
    },
    {
      "id": "stop",
      "title": "Self-Taught Optimizer (STOP): Recursively Self-Improving Code Generation",
      "shortTitle": "STOP：通过下游表现优化改进器",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2024",
      "venue": "COLM",
      "tags": [
        "Optimizer",
        "Code Generation",
        "RSI"
      ],
      "question": "改进程序本身能否依据下游任务的表现，修改自己的源代码并变得更好？",
      "coreIdea": "旧改进器读取并修改自己的源代码，生成候选版本；候选再处理一组下游程序任务，最终按平均下游表现选择新版本。",
      "experiment": "先在带噪奇偶任务上优化，再迁移到新例子。GPT-4 早期平均表现上升但不单调；GPT-3.5 与 Mixtral 没有整体提升。部分策略可迁移到五类新优化任务。",
      "takeaway": "应从同一 checkpoint 和相同预算比较新旧改进器，并观察多个未来步骤，同时记录性能、成本与错误。",
      "url": "https://arxiv.org/abs/2310.02304",
      "codeUrl": "https://github.com/microsoft/stop/tree/0d6780c54306b2486dd36e9c4ae9b49aceb27ea4"
    },
    {
      "id": "metaskill-evolve",
      "title": "MetaSkill-Evolve: Recursive Self-Improvement of LLM Agents via Two-Timescale Meta-Skill Evolution",
      "shortTitle": "MetaSkill-Evolve：快改任务技能，慢改“怎样改技能”",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2026",
      "venue": "arXiv",
      "tags": [
        "Agent Skills",
        "Meta-learning",
        "RSI"
      ],
      "question": "技能演化通常只更新“做什么”，能否同时学习“以后应该怎样改技能”？",
      "coreIdea": "每个分支同时保存任务技能、元技能和迭代历史。快循环修改任务技能，慢循环根据多轮收益更新元技能，演化图记录谱系与跨分支引用。",
      "experiment": "在冻结模型的 OfficeQA、SealQA 和 ALFWorld 上，相比只演化任务技能分别提升 6.38、8.05 和 1.92 个百分点。",
      "takeaway": "一个 checkpoint 应绑定模型、研究策略、可见证据、历史与剩余预算；评价元技能时要看后续候选的收益、成本和失败率。",
      "url": "https://arxiv.org/abs/2607.05297"
    },
    {
      "id": "skillopt",
      "title": "SkillOpt: Executive Strategy for Self-Evolving Agent Skills",
      "shortTitle": "SkillOpt：用受控文本更新训练紧凑领域技能",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2026",
      "venue": "arXiv",
      "tags": [
        "Skills",
        "Agent",
        "Optimization"
      ],
      "question": "如何持续更新 Agent 技能，同时避免单轨迹过拟合、自由改写失控和修改难以归因？",
      "coreIdea": "把技能做成可审计的外部文本状态。冻结目标模型，由优化器批量分析成败，只提出有限的原子修改，再去重、合并、排序并用独立门控选择；被拒绝的修改也保留。",
      "experiment": "覆盖六个 benchmark、七个模型和三种执行模式，在 52 个模型—任务—框架组合中最佳或并列最佳。GPT-5.5 direct 相比无技能平均提升 23.5 分。",
      "takeaway": "把研究策略写成可审计文本，每次只做小修改，保存接受与拒绝历史，并以更慢频率更新修改规则。",
      "url": "https://arxiv.org/abs/2605.23904"
    },
    {
      "id": "alphaevolve",
      "title": "AlphaEvolve: A Coding Agent for Scientific and Algorithmic Discovery",
      "shortTitle": "AlphaEvolve：程序谱系、搜索器演化与机制消融",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2025",
      "venue": "arXiv",
      "tags": [
        "Algorithm Discovery",
        "Evolution",
        "Code Agent"
      ],
      "question": "怎样让代码 Agent 通过可执行修改持续积累发现，同时避免搜索过早收敛？",
      "coreIdea": "给定初始程序、可编辑区域和评测器，系统选择父代与参考版本，由 LLM 生成代码 diff，执行评测后存入档案；MAP-Elites 与岛屿机制维持多样谱系。",
      "experiment": "覆盖矩阵乘法、数学构造与 Google 系统问题。50 多个数学问题中约 75% 达到已有最佳结果，约 20% 进一步改进；去掉演化机制的版本明显更弱。",
      "takeaway": "同时维护多谱系的 Solution Archive 与独立的 Strategy Archive，既保存结果，也保存产生结果的方法。",
      "url": "https://arxiv.org/abs/2506.13131"
    },
    {
      "id": "aide2",
      "title": "Recursive Self-Improvement of AI Research Agents",
      "shortTitle": "AIDE²：最直接的端到端实证之一",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2026",
      "venue": "arXiv",
      "tags": [
        "Research Agent",
        "RSI",
        "AutoML"
      ],
      "question": "研究 Agent 不只优化任务产物，还能否修改自己的研究工作流并在后续研究中变强？",
      "coreIdea": "用嵌套搜索树组织自我改进：内层树搜索任务代码，外层节点代表 Agent 版本；每个版本使用相同预算，并通过私有 holdout 决定是否接纳。",
      "experiment": "八天内进行了 99 次重写，接纳 7 次，分数从 0.703 提升到 0.778；四个外部 benchmark 上达到或超过生产 Agent，reward hacking 从 55% 降到 32%。",
      "takeaway": "同时维护模型树与研究策略树，并从同一 checkpoint、相同未来预算比较新旧改进器的持续收益。",
      "url": "https://arxiv.org/abs/2609.26457"
    },
    {
      "id": "explorationbench",
      "title": "ExplorationBench: Measuring AI Systems’ Exploration in Verifiable Alien Worlds",
      "shortTitle": "ExplorationBench：区分主动选证据、发现规则与实际使用",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2026",
      "venue": "arXiv",
      "tags": [
        "Exploration",
        "Benchmark",
        "Agent"
      ],
      "question": "怎样区分 Agent 的提升究竟来自更多思考、已有知识，还是来自它主动选择并利用了新证据？",
      "coreIdea": "AlienCode 与 AlienLogic 提供未知规则环境。Agent 进行四轮自主探测，再以不同工具和反馈条件比较自主、固定、重放与无新反馈等设置。",
      "experiment": "测试 10 个前沿模型，每个 sandbox 三条轨迹、四轮探索。AlienCode 自主探索中位数 66%，重放 40.7%，固定探测 5.7%；不同轨迹可相差 72.8 分。",
      "takeaway": "从同一 checkpoint 运行多条独立轨迹，并同时报告最好、平均、最差与失败案例，支持随时回滚。",
      "url": "https://arxiv.org/abs/2609.30199"
    },
    {
      "id": "discopop",
      "title": "Discovering Preference Optimization Algorithms with and for Large Language Models",
      "shortTitle": "DiscoPOP：偏好优化损失函数的自动发现与验证",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2024",
      "venue": "NeurIPS",
      "tags": [
        "Preference Optimization",
        "Algorithm Discovery"
      ],
      "question": "偏好优化算法能否由模型自动提出并验证，而不是完全依赖人工设计损失函数？",
      "coreIdea": "LLM 编写可执行的 PyTorch loss，通过格式与单元测试后参与训练和验证；代码与得分再进入下一轮上下文。基础模型、数据、训练和评测保持不变，只改变 loss。",
      "experiment": "基于 MT-Bench 反馈搜索约 100 个候选 loss，并得到 DiscoPOP、PADLL、AQFL。它们可迁移到 AlpacaEval、摘要和评论生成，但没有一个算法在所有任务上都最佳。",
      "takeaway": "允许 Agent 提出超出人工枚举步骤的新组合，但每个候选必须通过可执行实验验证。",
      "url": "https://arxiv.org/abs/2406.08414"
    },
    {
      "id": "promptbreeder",
      "title": "Promptbreeder: Self-Referential Self-Improvement via Prompt Evolution",
      "shortTitle": "Promptbreeder：任务提示与修改规则的共同演化",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2024",
      "venue": "ICML",
      "tags": [
        "Prompt Evolution",
        "RSI"
      ],
      "question": "提示词优化除了修改任务提示本身，能否连“怎样修改提示”的规则一起演化？",
      "coreIdea": "每个演化单元同时包含任务提示与变异提示，通过 tournament GA 竞争；变异提示还会被 hypermutation 修改，外部评测器始终固定。",
      "experiment": "覆盖算术、常识、仇恨分类和指令归纳。GSM8K 零样本达到 83.9%，高于 OPRO 的 80.2%；多种组件共同贡献提升，初始改写很关键。",
      "takeaway": "把“产生下一版研究策略的规则”也纳入版本管理，追踪每个后代如何生成、怎样验证以及后续是否继续受益。",
      "url": "https://arxiv.org/abs/2309.16797"
    },
    {
      "id": "harnesslens",
      "title": "Verify Smarter, Evolve Further: Efficient Harness Evolution through Behavior-Aware Verification",
      "shortTitle": "HarnessLens：按修改选择验证任务，并要求可归因证据",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2026",
      "venue": "arXiv",
      "tags": [
        "Harness",
        "Verification",
        "Agent"
      ],
      "question": "Harness 修改只影响特定行为时，怎样避免用同一套任务反复做昂贵又难以归因的验证？",
      "coreIdea": "流程包括 Context Exploration、Trajectory Diagnosis 和 Harness Evolution。每次修改都选择针对性的验证任务，比较当前版与候选版，同时检查目标行为是否改善、已有能力是否保留。",
      "experiment": "在 OpenCode、Codex 与 Pi 上，覆盖 Retail、Banking、Terminal-Bench 和 BIRD；预算为 200 units，holdout 平均最高提升 13.6%、7.6% 和 9.2%。",
      "takeaway": "为每次修改建立 Hypothesis Card：记录父版本、支持轨迹、预期行为和回归风险，并从同一 checkpoint 与预算验证。",
      "url": "https://arxiv.org/abs/2608.27311"
    },
    {
      "id": "ai4ai-bench",
      "title": "AI4AI-Bench",
      "shortTitle": "AI4AI-Bench：检验 Agent 能否改进训练方法",
      "domain": "ai4s",
      "topic": "rsi-ai4ai",
      "year": "2026",
      "venue": "arXiv",
      "tags": [
        "Benchmark",
        "AI4AI",
        "Training Algorithms"
      ],
      "question": "Agent 的训练结果提升，究竟来自真正的新学习方法，还是超参数、更多训练与 checkpoint 替换？",
      "coreIdea": "提供 10 个冻结的研究仓库和初始模型，Agent 在单张 B300 上工作四小时并提交代码 diff；系统在干净环境中最多复跑 12 小时，用隐藏固定评测器与原始基线比较。",
      "experiment": "六个系统、29 种配置、290 次尝试。归一化后原始方法为 0.1、理想为 1.0，所有系统平均 0.166，最好 0.250；学习方法修改的平均得分高于配置或运行时修改。",
      "takeaway": "明确记录修改对象；使用相同初始化、预算、独立复跑与固定评测，并追踪修改是否被后续系统继续使用。",
      "url": "https://arxiv.org/abs/2608.20318"
    }
  ],
  "blogs": [
    {
      "id": "game-world-models",
      "meta": "AI FOR GAMES · 世界模型",
      "title": "What should a game world model remember?",
      "summary": "值得回看：世界模型的关键不只是生成下一帧，而是让规则、对象、资源、事件与长期后果在行动后仍可查询、验证并用于规划。",
      "url": "blog/game-world-models.html",
      "action": "阅读笔记",
      "category": "world-model"
    }
  ],
  "projects": [
    {
      "id": "next-project",
      "meta": "持续更新",
      "title": "下一次动手",
      "summary": "新的每日项目可以从这里继续生长。",
      "url": "",
      "action": "等待下一篇"
    }
  ],
  "horizon": [],
  "blogCategories": [
    {
      "id": "multimodal-model",
      "name": "多模态模型",
      "caption": "Multimodal Model"
    },
    {
      "id": "visual-generation",
      "name": "视觉生成",
      "caption": "Visual Generation"
    },
    {
      "id": "world-model",
      "name": "世界模型",
      "caption": "World Model"
    },
    {
      "id": "ai-agents",
      "name": "AI 智能体",
      "caption": "AI Agents"
    },
    {
      "id": "llm-mllm",
      "name": "大语言模型与多模态大语言模型",
      "caption": "LLM & MLLM"
    },
    {
      "id": "foundation-model",
      "name": "基础模型",
      "caption": "Foundation Model"
    },
    {
      "id": "efficient-ai",
      "name": "高效 AI",
      "caption": "Efficient AI"
    },
    {
      "id": "trustworthy-ai",
      "name": "可信 AI",
      "caption": "Trustworthy AI"
    },
    {
      "id": "research-craft",
      "name": "科研实践",
      "caption": "Research Craft"
    },
    {
      "id": "frontier",
      "name": "前沿探索",
      "caption": "Frontier"
    },
    {
      "id": "how-to-research",
      "name": "研究方法",
      "caption": "How to Research"
    }
  ]
};
