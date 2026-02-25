---
title: "Sampling Design and Data Collection"
module_number: 7
author: "Vivek H. Patil, Ph.D."
institution: "Gonzaga University"
subtitle: "Probability and non-probability sampling, sample size determination, and data collection strategies."
learning_objectives:
  - "Explain when a census is appropriate vs. when sampling is preferred"
  - "Walk through the steps of the sampling process from defining the target population to executing selection"
  - "Distinguish between probability and non-probability sampling methods and their appropriate uses"
  - "Compare simple random, systematic, stratified, and cluster sampling designs"
  - "Compare judgmental, snowball, convenience, and quota sampling designs"
  - "Calculate sample size using statistical formulas and apply ad hoc methods"
  - "Identify sources of sampling and non-sampling error"
discussion_questions:
  - "A national restaurant chain wants to survey its customers about a proposed menu change. Design a sampling plan: What is the target population? What sampling frame would you use? What sampling method would you recommend, and why? How would you determine the sample size?"
  - "Under what circumstances is a non-probability sample not only acceptable but actually preferable to a probability sample? Provide at least two specific business scenarios."
  - "A researcher finds that the required sample size for a study is 1,500 but the budget only allows for 600 respondents. What are the researcher's options? What are the trade-offs of each option?"
  - "Consider the ethical dimension of sampling. When a study systematically excludes certain populations (e.g., non-English speakers, rural communities, low-income individuals without internet access), what are the consequences? How does the Jesuit commitment to justice inform our approach to inclusive sampling?"
---

## 7.1 Census vs. Sample

A fundamental choice in any research study is whether to collect data from **every member** of the target population (a **census**) or from a **subset** (a **sample**). Each approach has its place, and understanding the conditions that favor one over the other is essential for designing research that balances rigor with practical feasibility.

### When a Census Is Appropriate

A census -- the complete enumeration of every member of the target population -- is the most straightforward approach to data collection, but it is only practical and desirable under certain conditions. First, a census becomes feasible when the population is small enough that surveying every member does not impose prohibitive costs or logistical burdens. An organization with 50 employees, for instance, can reasonably survey all of them about workplace satisfaction without straining its resources. Second, a census is warranted when information is needed from every individual in the population, as in the case of a mandatory compliance audit or a performance review process that must account for each employee. Third, when the cost of making an incorrect decision is very high, the additional investment in a complete enumeration may be justified; decisions about plant closings, major capital expenditures, or regulatory compliance often fall into this category. Finally, a census eliminates sampling error entirely -- because there is no sampling, there can be no discrepancy between the sample statistic and the population parameter. In situations where even a small margin of error is unacceptable, a census provides the certainty that no sample can match.

### When Sampling Is Preferred

Despite the apparent appeal of complete data, the vast majority of business research relies on samples rather than censuses, and for good reason. When the population is large -- encompassing thousands or millions of individuals, households, or transactions -- a census becomes logistically impractical, financially prohibitive, and often unnecessary. Cost and time constraints are among the most common reasons for sampling; conducting a census of a national consumer market, for example, would require resources far beyond what most organizations can allocate to a single study.

Sampling also offers advantages that are less immediately obvious. A well-designed sample actually allows the researcher to devote more time and attention to each respondent, potentially improving the quality of the data collected. When interviewers are responsible for contacting hundreds rather than hundreds of thousands of respondents, they can conduct more thorough interviews, follow up on ambiguous responses, and reduce the kinds of errors that arise from fatigue and rushed data collection. Smaller samples are also easier to manage, enabling tighter quality control and more careful supervision of the data collection process.

Speed is another important consideration. When a business decision cannot wait for the months it might take to enumerate an entire population, a well-drawn sample can provide reliable results in a fraction of the time. Furthermore, when the population is relatively **homogeneous** with respect to the variables of interest, a sample can adequately represent the whole without the expense of complete enumeration. A small sample drawn from a population of identical ball bearings, for instance, tells us nearly as much as testing every unit.

In practice, the key question is not whether to sample, but **how** to sample well. The remainder of this module addresses that question in detail.

## 7.2 The Sampling Process

The sampling process involves a series of sequential decisions, each of which builds on the ones before it (adapted from Churchill & Iacobucci, 2015):

1. **Define the target population** -- Who are we studying?
2. **Identify the sampling frame** -- What list or source will we use to access the population?
3. **Select a sampling procedure** -- How will we choose individuals from the frame?
4. **Determine the sample size** -- How many individuals do we need?
5. **Select the sample members** -- Execute the sampling plan
6. **Collect the data** -- Gather information from the selected sample

Each step involves critical decisions that affect the quality and generalizability of the research. A misstep at any stage -- an imprecise population definition, an incomplete sampling frame, or an inappropriate sampling method -- can compromise the entire study. The sections that follow examine each step in detail.

### Step 1: Defining the Target Population

The target population must be defined with precision, because ambiguity at this stage propagates through every subsequent decision. Defining the population requires the researcher to think carefully about who, exactly, the study is intended to represent. This begins with considering all reasonable alternatives: Should the population encompass current customers only, or should it also include potential customers and former customers? Should it include all employees of a firm, or only those in certain roles, locations, or tenure categories? Each choice shapes the scope and applicability of the findings.

Knowing the market is equally important. The researcher must establish clear geographic, demographic, and behavioral boundaries that delineate the population. A study of "coffee consumers in the Pacific Northwest" is more precisely defined than a study of "coffee drinkers," but it may still require further specification -- does it include consumers who purchase coffee for home brewing, those who visit coffee shops, or both? Are there age restrictions? Frequency-of-purchase thresholds?

The researcher must also consider the appropriate **sampling unit** -- that is, the entity that is actually being sampled and from which data are collected. The sampling unit might be an individual consumer, a household, an organization, a retail store, or a geographic area, depending on the research question. A study of household purchasing behavior, for instance, uses the household as the sampling unit even though individual family members make many of the purchase decisions.

Equally important is specifying what is excluded from the population. Exclusion criteria should be stated explicitly so that the boundaries of the population are unambiguous. The overall population definition should be **reproducible**: another researcher, reading the definition, should be able to identify the same population without additional guidance. This standard of clarity ensures that the study's findings can be properly interpreted and that future researchers can replicate or extend the work.

### Step 2: Identifying the Sampling Frame

The **sampling frame** is the actual list, directory, database, or mechanism from which sample members are drawn. It is the operational representation of the target population -- the tangible resource that makes sampling possible. Common sampling frames include customer databases maintained by the organization, voter registration lists, telephone directories, employee rosters, professional association membership lists, and commercial mailing lists purchased from data vendors.

A critical issue in sampling design is the potential **mismatch** between the target population and the sampling frame, because the two are rarely identical. The frame may be a **subset** of the population, excluding members who should be included. A telephone directory, for example, omits individuals with unlisted numbers, those who rely exclusively on mobile phones, and those without telephone service altogether -- a group that may differ systematically from those who are listed. Similarly, a customer database may not include recent customers whose records have not yet been entered.

Conversely, the frame may be a **superset** of the population, including individuals who should not be part of the study. A mailing list purchased from a trade association, for instance, might include former members, retired professionals, or individuals who have moved to a different industry. In some cases, the frame only partially **intersects** with the population, simultaneously including some individuals who should be excluded and excluding others who should be included.

Understanding and managing this mismatch is essential for research quality. The researcher should evaluate the sampling frame critically before using it, assessing the likely direction and magnitude of any discrepancies. Where possible, the frame should be cleaned and updated to bring it into closer alignment with the target population. When a perfect frame is unavailable -- as is often the case -- the researcher should document the known limitations and consider how they might affect the study's findings. This transparency allows readers and decision-makers to evaluate the results in light of the frame's imperfections.

## 7.3 Non-Probability Sampling

In **non-probability sampling**, the probability of any particular individual being selected is unknown. This means that the researcher cannot calculate sampling error or make statistical generalizations from the sample to the broader population with known confidence. Despite this limitation, non-probability methods are widely used in business research when probability sampling is impractical, too expensive, or unnecessary for the study's purpose.

### Types of Non-Probability Sampling

| Method | Description | When to Use |
|---|---|---|
| **Judgmental (Purposive)** | An expert uses judgment to select individuals who are believed to represent the population. Participants are hand-picked because they serve the research purpose. | When expert knowledge can identify the most informative participants; early-stage exploratory research |
| **Snowball** | Initial respondents refer the researcher to others, who refer still others, creating a chain. | When reaching small, specialized, or hidden populations (e.g., luxury brand users, niche B2B executives) |
| **Convenience** | Individuals are selected simply because they are accessible and willing. | Quick preliminary studies; pretesting questionnaires; when speed is critical and generalizability is not |
| **Quota** | Minimum numbers of respondents are selected from specified subgroups, often based on demographic characteristics. | When the researcher wants to ensure representation of key subgroups without the cost of probability sampling |

Each of these methods warrants further discussion, because choosing among them requires an understanding of their mechanics, strengths, and appropriate applications.

**Judgmental (purposive) sampling** relies on the researcher's expertise -- or the expertise of an informed gatekeeper -- to identify and select participants who are especially well-suited to the research question. A marketing researcher studying luxury automobile purchasing decisions might deliberately select respondents who have recently purchased vehicles in the $80,000-and-above segment, reasoning that these individuals can provide the richest insights into the decision process. Similarly, a management consultant investigating best practices in supply chain resilience might purposefully select companies known for their innovative logistics operations. The strength of judgmental sampling lies in its efficiency: by targeting participants with relevant experience and knowledge, the researcher can obtain deep, high-quality data without the expense of screening a large random sample. The weakness, of course, is that the results are only as good as the expert's judgment about who is "representative" or "informative." If the expert's assumptions are wrong, the sample may be systematically biased in ways that are difficult to detect.

**Snowball sampling** is particularly valuable when the target population is difficult to identify or access through conventional means. Populations that are small, dispersed, or socially connected -- such as undocumented immigrants, members of exclusive professional networks, early adopters of a niche technology, or executives at a very senior level -- may be virtually impossible to reach through random sampling from a standard frame. In snowball sampling, the researcher begins with a small number of initial contacts who meet the study's criteria and asks each of them to recommend additional participants who also qualify. Those referrals, in turn, recommend still others, and the sample grows organically through the social network. A researcher studying the decision-making processes of angel investors, for example, might begin with two or three known investors and follow referral chains into a broader network. The primary limitation of snowball sampling is that the resulting sample tends to be clustered within particular social networks, potentially missing isolated individuals or subgroups that are not well-connected to the initial contacts.

**Convenience sampling** is the simplest and most economical approach, but also the most vulnerable to bias. Participants are selected solely on the basis of their accessibility and willingness to participate -- university students enrolled in a particular course, shoppers intercepted at a single mall, or visitors to a company website who happen to click on a survey link. While convenience samples are appropriate for pretesting questionnaires, generating initial hypotheses, or conducting pilot studies where generalizability is not the primary concern, they should be used with caution when the goal is to draw conclusions about a broader population. The individuals who are most convenient to reach are often systematically different from those who are not, and the resulting data may reflect these differences rather than the characteristics of the target population.

**Quota sampling** attempts to address one of the main weaknesses of convenience sampling by ensuring that the sample includes specified numbers of respondents from key subgroups. The researcher establishes quotas -- for example, requiring that the sample include at least 100 men and 100 women, or at least 50 respondents from each of four income brackets -- and then fills those quotas using non-random methods. Quota sampling resembles stratified random sampling in its attention to subgroup representation, but it differs in a crucial respect: within each quota category, respondents are selected by convenience or judgment rather than at random. This means that while the sample may match the population's overall composition on the quota variables, it may still be biased on other dimensions. A quota sample that matches the population's gender and age distribution, for example, may still overrepresent individuals who are more accessible, more cooperative, or more interested in the topic.

### Limitations of Non-Probability Sampling

The limitations of non-probability sampling are significant and should be clearly understood by any researcher who employs these methods. Because the probability of selection is unknown, the results of a non-probability study cannot be generalized to the broader population with statistical confidence. The researcher cannot calculate margins of error or construct confidence intervals in the way that probability sampling permits. Selection bias is inherent in all non-probability methods, because certain types of individuals are systematically more or less likely to be included depending on the selection mechanism -- more accessible individuals, more cooperative respondents, and those with larger social networks are all overrepresented. Furthermore, because sampling error cannot be estimated, the researcher has no quantitative basis for assessing how closely the sample statistics approximate the true population parameters. For these reasons, non-probability samples are best suited to exploratory research, pilot testing, and situations where the research objective does not require statistical generalization.

<div class="activity-match" data-activity-id="m7-match-1" data-points="15">
  <div class="activity-header">
    <span class="activity-type-badge match">Match Pairs</span>
    <h3>Match the Non-Probability Sampling Method to Its Scenario</h3>
    <span class="activity-points-badge">+15 XP</span>
  </div>
  <div class="activity-body">
    <p>Click an item on the left, then click its match on the right.</p>
    <div class="match-container">
      <div class="match-left">
        <div class="match-column-label">Sampling Method</div>
        <div class="match-item" data-match-id="l1" data-match-target="r1">Judgmental (Purposive)</div>
        <div class="match-item" data-match-id="l2" data-match-target="r2">Snowball</div>
        <div class="match-item" data-match-id="l3" data-match-target="r3">Convenience</div>
        <div class="match-item" data-match-id="l4" data-match-target="r4">Quota</div>
      </div>
      <div class="match-right">
        <div class="match-column-label">Scenario</div>
        <div class="match-item" data-match-id="r4">A researcher needs 50 men and 50 women for a brand perception study and recruits willing participants at a shopping mall until each group is filled</div>
        <div class="match-item" data-match-id="r2">A researcher studying angel investors begins with three known investors and asks each to recommend other investors they know who might participate</div>
        <div class="match-item" data-match-id="r1">A marketing consultant hand-picks five companies known for innovative supply chain practices to study best practices in logistics</div>
        <div class="match-item" data-match-id="r3">A student distributes a survey to classmates during a lecture to quickly pretest a new questionnaire before the full study launches</div>
      </div>
    </div>
  </div>
  <div class="activity-footer">
    <button class="btn-reset-activity">Try Again</button>
  </div>
</div>

## 7.4 Probability Sampling

In **probability sampling**, every member of the target population has a **known, non-zero probability** of being selected. This property is not merely a technical nicety; it is the foundation upon which statistical inference rests. Because the selection probabilities are known, the researcher can estimate sampling error, construct confidence intervals, and generalize findings from the sample to the broader population with quantifiable precision. Probability sampling is therefore the preferred approach whenever the research requires statistical generalization and the necessary resources -- a complete sampling frame, adequate budget, and sufficient time -- are available.

### Simple Random Sampling (SRS)

Simple random sampling is the most fundamental probability sampling method and the conceptual foundation for most statistical theory. In an SRS design, each member of the population has an **equal probability** of being selected, and every possible sample of a given size is equally likely to be drawn. This dual requirement of equal individual and equal sample probability makes SRS the gold standard against which other sampling methods are compared.

In practice, implementing simple random sampling requires a complete and accurate list of all members of the target population. Each member is assigned a unique identification number, and a random number generator -- or a table of random numbers -- is used to select the desired number of cases. Modern software makes this process straightforward, but the requirement for a complete population list remains the method's most significant practical constraint. For populations that are large and geographically dispersed, assembling such a list may be difficult, expensive, or impossible.

The principal advantage of simple random sampling is that it eliminates selection bias entirely: because every individual has the same chance of being selected, no subgroup is systematically favored or disadvantaged. This property also means that SRS supports the full range of statistical analyses without the need for weighting adjustments or special estimation procedures. The main limitations are practical ones. In addition to the requirement for a complete population list, SRS can be expensive when the population is spread across a wide geographic area, because the randomly selected individuals may be scattered in locations that are costly to reach. Moreover, SRS does not guarantee proportional representation of subgroups -- a random sample from a population that is 5% Hispanic, for example, might by chance include no Hispanic respondents at all, particularly if the sample size is small. Stratified sampling, discussed in the next section, addresses this limitation.

### Systematic Sampling

Systematic sampling offers a practical alternative to simple random sampling that is easier to implement in many field situations. The method involves selecting every *k*th member from an ordered list, after choosing a random starting point. The sampling interval *k* is calculated by dividing the population size by the desired sample size. For example, if the population has 10,000 members and the researcher needs a sample of 500, the sampling interval is 20 (k = 10,000 / 500 = 20). The researcher selects a random number between 1 and 20 as the starting point and then selects every 20th person on the list from that point forward.

Systematic sampling has several practical advantages over SRS. It is simpler to implement, because the researcher needs only a single random number (the starting point) rather than a full set of random selections. It also spreads the sample evenly across the entire list, which can be beneficial if the list is ordered in a way that relates to the variable of interest -- for instance, an alphabetical list of customers may implicitly distribute the sample across geographic regions or demographic groups. In many applications, including telephone surveys and intercept studies at retail locations, systematic sampling is the method of choice because of its operational simplicity.

The primary risk of systematic sampling arises when the list has a periodic pattern -- a regular, recurring structure -- that coincides with the sampling interval. If employees on a roster are listed in groups of 10, with a supervisor listed every 10th position, and the sampling interval is also 10, the sample might consist entirely of supervisors or entirely of non-supervisors, depending on the starting point. Such periodicity is relatively rare in practice but should be checked for before implementing systematic sampling. When the list has no periodic pattern, systematic sampling produces results that are functionally equivalent to simple random sampling.

<div class="activity-quiz" data-activity-id="m7-quiz-1" data-points="10">
  <div class="activity-header">
    <span class="activity-type-badge quiz">Knowledge Check</span>
    <h3>Probability Sampling Fundamentals</h3>
    <span class="activity-points-badge">+10 XP</span>
  </div>
  <div class="activity-body">
    <div class="quiz-question" data-correct="c">
      <p>What distinguishes simple random sampling (SRS) from other probability sampling methods?</p>
      <div class="quiz-options">
        <div class="quiz-option" data-value="a"><span class="option-marker">A</span><span>It is the cheapest method to implement for large populations</span></div>
        <div class="quiz-option" data-value="b"><span class="option-marker">B</span><span>It guarantees proportional representation of all subgroups</span></div>
        <div class="quiz-option" data-value="c"><span class="option-marker">C</span><span>Every member has an equal probability of selection, and every possible sample of a given size is equally likely</span></div>
        <div class="quiz-option" data-value="d"><span class="option-marker">D</span><span>It does not require a complete list of the population</span></div>
      </div>
      <div class="feedback-correct">Correct. SRS requires both that each individual has an equal chance of being selected and that every possible sample of the desired size is equally likely to be drawn. This dual requirement makes it the gold standard for probability sampling.</div>
      <div class="feedback-incorrect">Not quite. SRS is defined by its dual requirement: each member has an equal probability of selection, and every possible sample of a given size is equally likely. It actually requires a complete population list and does not guarantee subgroup representation.</div>
    </div>
    <div class="quiz-question" data-correct="b">
      <p>What is the primary risk associated with systematic sampling?</p>
      <div class="quiz-options">
        <div class="quiz-option" data-value="a"><span class="option-marker">A</span><span>It always produces biased samples because only one random number is used</span></div>
        <div class="quiz-option" data-value="b"><span class="option-marker">B</span><span>If the list has a periodic pattern that coincides with the sampling interval, the sample may be severely biased</span></div>
        <div class="quiz-option" data-value="c"><span class="option-marker">C</span><span>It cannot be used with populations larger than 10,000 members</span></div>
        <div class="quiz-option" data-value="d"><span class="option-marker">D</span><span>It requires stratification before selection can begin</span></div>
      </div>
      <div class="feedback-correct">Correct. Periodicity is the key risk in systematic sampling. If the list has a recurring pattern that aligns with the sampling interval (e.g., every 10th person is a supervisor and k = 10), the resulting sample can be seriously unrepresentative.</div>
      <div class="feedback-incorrect">The main risk is periodicity -- when the list has a regular, recurring pattern that coincides with the sampling interval. For example, if supervisors appear every 10th position and the sampling interval is also 10, the sample could consist entirely of supervisors or entirely of non-supervisors.</div>
    </div>
    <div class="quiz-question" data-correct="d">
      <p>Under which condition is a census generally preferred over sampling?</p>
      <div class="quiz-options">
        <div class="quiz-option" data-value="a"><span class="option-marker">A</span><span>When the population is large and geographically dispersed</span></div>
        <div class="quiz-option" data-value="b"><span class="option-marker">B</span><span>When the research budget is limited and time is short</span></div>
        <div class="quiz-option" data-value="c"><span class="option-marker">C</span><span>When the population is highly homogeneous on the variable of interest</span></div>
        <div class="quiz-option" data-value="d"><span class="option-marker">D</span><span>When the population is small and the cost of an incorrect decision is very high</span></div>
      </div>
      <div class="feedback-correct">Correct. A census is preferred when the population is small enough to survey completely and when the stakes are high enough that even a small margin of sampling error is unacceptable. A census eliminates sampling error entirely.</div>
      <div class="feedback-incorrect">A census is most appropriate when the population is small (making complete enumeration feasible) and when the cost of making an incorrect decision is very high (justifying the additional investment). Large, dispersed populations and limited budgets are conditions that favor sampling, not a census.</div>
    </div>
  </div>
  <div class="activity-footer">
    <button class="btn-check-answer">Check Answer</button>
    <button class="btn-reset-activity">Try Again</button>
  </div>
</div>

## 7.5 Stratified and Cluster Sampling

### Stratified Sampling

Stratified sampling is a method in which the population is divided into **strata** -- mutually exclusive and collectively exhaustive subgroups defined by a characteristic that is relevant to the research question -- and a separate random sample is then drawn independently from each stratum. The defining principle of stratification is that the members within each stratum should be relatively homogeneous with respect to the variable of interest, while the strata themselves should differ from one another. By sampling separately from each stratum, the researcher guarantees that all important subgroups are represented in the final sample, eliminating the risk that random chance might cause one or more subgroups to be missed entirely.

**Proportionate stratified sampling** draws a sample from each stratum in proportion to the stratum's share of the total population. If women constitute 60% of the population and men 40%, the sample will also be 60% women and 40% men. This approach produces a sample that mirrors the population's composition on the stratifying variable, combining the representativeness of proportional allocation with the precision gains that come from stratification. Proportionate stratified sampling is appropriate when the research goal is to estimate overall population parameters and the stratifying variable is correlated with the outcome of interest.

**Disproportionate stratified sampling** deliberately oversamples or undersamples certain strata relative to their population share. This approach is particularly useful when certain subgroups are small but analytically important. Consider a study of employee satisfaction across a company where 90% of employees are in non-management roles and 10% are managers. A proportionate sample of 200 would include only about 20 managers -- too few for reliable subgroup analysis. Disproportionate sampling might allocate 100 respondents to each group, providing sufficient data for meaningful comparisons. When disproportionate sampling is used, the researcher must apply statistical weights when computing overall population estimates to correct for the intentional over- or underrepresentation.

### Cluster Sampling

Cluster sampling takes a fundamentally different approach to the problem of sampling from large, geographically dispersed populations. Rather than sampling individuals directly, the researcher divides the population into **clusters** -- typically geographic units such as city blocks, zip codes, counties, or school districts -- and then randomly selects a subset of clusters. In **one-stage cluster sampling**, all members within the selected clusters are included in the study. In **two-stage cluster sampling**, a random sample of members is drawn from within each selected cluster, further reducing data collection costs.

The logic of cluster sampling rests on the assumption that each cluster is a microcosm of the overall population -- that is, the members within each cluster are heterogeneous and roughly representative of the population as a whole. When this assumption holds, studying a random sample of clusters provides a reasonable approximation of what a study of the entire population would reveal, but at substantially lower cost. A national survey, for instance, might randomly select 50 counties and then sample households within those counties, avoiding the enormous expense of traveling to every county in the country.

### Stratified vs. Cluster: A Critical Comparison

| Dimension | Stratified Sampling | Cluster Sampling |
|---|---|---|
| **Within-group composition** | Homogeneous (members within each stratum are similar) | Heterogeneous (members within each cluster are diverse) |
| **Between-group composition** | Heterogeneous (strata differ from each other) | Homogeneous (clusters resemble each other) |
| **Groups used** | All strata are represented | Only selected clusters are studied |
| **Efficiency logic** | Increases accuracy at a faster rate than it increases cost | Decreases cost at a faster rate than it decreases accuracy |
| **Best for** | Improving precision when subgroups differ on the variable of interest | Reducing cost when the population is geographically dispersed |

The distinction between stratified and cluster sampling is one of the most important conceptual points in sampling design. In stratified sampling, the researcher wants the groups (strata) to be internally homogeneous so that sampling a few members from each stratum efficiently captures the variation in the population. In cluster sampling, by contrast, the researcher wants the groups (clusters) to be internally heterogeneous -- each cluster should resemble the population as a whole -- because only some clusters will be sampled. The efficiency gains of stratified sampling come from increased precision at modest additional cost, while the efficiency gains of cluster sampling come from reduced cost at a modest sacrifice in precision. The choice between the two depends on the structure of the population, the availability of stratifying information, and the relative importance of cost and precision in the specific research context.

<div class="activity-scenario" data-activity-id="m7-scenario-1" data-points="15">
  <div class="activity-header">
    <span class="activity-type-badge scenario">Scenario</span>
    <h3>Stratified or Cluster Sampling?</h3>
    <span class="activity-points-badge">+15 XP</span>
  </div>
  <div class="activity-body">
    <div class="scenario-prompt">A large national bank wants to survey its customers about satisfaction with online banking services. The bank has 2 million customers spread across 800 branch locations in 40 states. The research team has a limited travel budget but needs to conduct in-person follow-up interviews with a subset of survey respondents. Customer satisfaction is expected to vary significantly by account type (checking-only, savings-only, and full-service customers), but branches in different regions are believed to serve fairly similar mixes of customers.</div>
    <p class="scenario-question">Which sampling approach is more appropriate for this study?</p>
    <div class="scenario-options">
      <div class="scenario-option" data-correct="false"><span>Stratified sampling by geographic region, drawing random samples from each state</span><div class="scenario-feedback">Stratified sampling by region would not address the primary concern here. The key issue is the limited travel budget combined with a geographically dispersed population. Since branches in different regions serve similar customer mixes, stratifying by region would add cost without meaningfully improving precision.</div></div>
      <div class="scenario-option" data-correct="true"><span>Cluster sampling, randomly selecting a subset of branch locations and surveying customers within those branches</span><div class="scenario-feedback">Correct. Cluster sampling is the better choice here. The branches serve as natural clusters that are internally heterogeneous (each contains a diverse mix of customer types) and relatively similar to each other across regions. By randomly selecting a manageable number of branches, the bank can dramatically reduce travel costs for in-person follow-ups while still obtaining a representative sample. This is exactly the scenario where cluster sampling excels -- reducing cost for geographically dispersed populations.</div></div>
      <div class="scenario-option" data-correct="false"><span>Stratified sampling by account type, drawing random samples of checking-only, savings-only, and full-service customers from across all branches</span><div class="scenario-feedback">While stratifying by account type would ensure representation of each customer segment (a valid concern given expected satisfaction differences by account type), this approach ignores the practical constraint of a limited travel budget. Drawing customers from all 800 branches would make in-person follow-ups prohibitively expensive. A better approach would be to first cluster by branch location and then stratify within selected branches if needed.</div></div>
    </div>
  </div>
  <div class="activity-footer">
    <button class="btn-reset-activity">Try Again</button>
  </div>
</div>

## 7.6 Determining Sample Size

Determining the appropriate sample size is one of the most consequential decisions in the research design process. A sample that is too small may lack the statistical power to detect meaningful effects, rendering the study inconclusive. A sample that is unnecessarily large wastes resources that could be allocated to other aspects of the study -- such as improving the questionnaire, training interviewers more thoroughly, or conducting follow-up interviews to reduce non-response bias.

### Factors Influencing Sample Size

Several factors interact to determine the sample size a study requires. The **number of subgroups** in the analysis is one of the most important: if the researcher plans to compare men and women across three age groups and two income levels, each of the resulting 12 subgroups must contain enough cases for reliable analysis, and the total sample must be large enough to populate all of them adequately. The **value of the information** also matters -- higher-stakes decisions, where the cost of an incorrect conclusion is substantial, warrant larger and more precise samples than low-stakes exploratory studies. The **required accuracy** of the estimates plays a direct role as well: tighter confidence intervals and smaller margins of error demand larger samples. The **variability of the population** is another critical factor, because a population in which individuals differ widely on the variable of interest requires a larger sample to achieve the same precision as a population in which individuals are relatively similar. Finally, the **budget** available for the study sets a practical ceiling on the feasible sample size, and the researcher must often balance the desire for statistical precision against the reality of limited resources.

### Statistical Approach

The fundamental formula for determining sample size (for estimating a population mean) is:

**n = (Z² x s²) / E²**

Where:
- **n** = required sample size
- **Z** = z-value corresponding to the desired confidence level (e.g., 1.96 for 95% confidence)
- **s** = estimated population standard deviation
- **E** = desired margin of error (maximum acceptable sampling error)

### Estimating the Standard Deviation

The formula requires an estimate of the population standard deviation (s), which the researcher may not know in advance. This creates a practical challenge: the researcher needs to know something about the population's variability in order to determine how large a sample is needed to measure that variability. Several approaches can be used to resolve this circularity.

If the study replicates or extends prior research, the standard deviation reported in that earlier work provides a reasonable starting estimate. **Past studies** in the same domain, even if not identical in scope, can offer useful benchmarks for the likely magnitude of variability. When no prior research is available, the researcher may conduct a **pilot study** -- a small preliminary data collection effort, often using non-probability sampling -- to obtain an empirical estimate of variability. A third approach is **range estimation**, in which the researcher uses prior knowledge or expert judgment to estimate the likely range of the variable and then divides that range by six. This approximation rests on the property of the normal distribution in which approximately 99.7% of values fall within three standard deviations of the mean, so the total range spans roughly six standard deviations.

<div class="callout callout-example">
<p class="callout-title">Interactive Tool: Sampling Simulator</p>
<p>To build your intuition for how different sampling methods, sample sizes, and population distributions affect results, use the <strong><a href="https://analytics.gonzaga.edu/sampling/" target="_blank" rel="noopener noreferrer">Sampling Simulator</a></strong>. This interactive app lets you configure populations, apply different sampling methods, visualize sampling distributions, and explore sample size calculators for margin of error, proportions, group comparisons, and budget analysis. Experiment with different settings to see firsthand how sampling decisions affect precision and bias.</p>
</div>

### Ad Hoc Methods

When formal statistical methods are impractical -- perhaps because the researcher lacks the prior information needed to estimate variability, or because the study's objectives do not lend themselves to a precise statistical calculation -- researchers turn to ad hoc approaches for determining sample size (Churchill & Iacobucci, 2015).

**Rules of thumb** provide rough but useful guidance. A common guideline holds that the total sample should be large enough that when divided into the subgroups required for analysis, each subgroup contains at least 100 cases for major analyses or at least 20 to 50 cases for subgroup comparisons. These thresholds are not derived from formal statistical theory, but they reflect decades of practical experience about the minimum sample sizes needed for reasonably stable estimates.

**Budget-driven determination** works backward from the available resources. The researcher estimates the per-unit cost of data collection -- including interviewer time, travel, incentives, data entry, and overhead -- and divides the total budget by this per-unit cost to arrive at the maximum feasible sample size. The researcher then evaluates whether this sample size is large enough to address the research questions with acceptable precision. If it is not, the researcher faces a difficult choice: seek additional funding, simplify the research design to reduce per-unit costs, or accept reduced precision and narrower analytical scope.

**Benchmarking against comparable studies** is another practical approach. By reviewing published research with similar objectives, populations, and methods, the researcher can identify the sample sizes that other investigators have found adequate. While there is no guarantee that what worked in one study will work in another, comparable-study benchmarks provide a useful reality check and a defensible rationale for the chosen sample size.

<div class="callout callout-example">
<p class="callout-title">Sample Size Calculation Example</p>
<p>A retailer wants to estimate average customer spending per visit with 95% confidence and a margin of error of $5. Past data suggest the standard deviation of spending is approximately $30.</p>
<p><strong>n = (1.96² x 30²) / 5² = (3.8416 x 900) / 25 = 3,457.44 / 25 ≈ 139</strong></p>
<p>The retailer needs a sample of approximately 139 customers. Note how a larger standard deviation or a tighter margin of error would increase the required sample size.</p>
</div>

## 7.7 Sampling and Non-Sampling Errors

It is crucial to distinguish between two broad categories of errors that affect research quality, because they have different sources, different consequences, and different remedies.

**Sampling error** is the difference between a sample statistic and the true population parameter, arising simply because a sample (rather than a census) was used. Sampling error is a natural and unavoidable consequence of the sampling process itself. If a researcher drew 100 different random samples from the same population, each sample would produce a slightly different estimate of the population mean, and none would match the true value exactly. The crucial feature of sampling error, however, is that it is **quantifiable and controllable**. The researcher can estimate the magnitude of sampling error using the standard error formula, and can reduce it by increasing the sample size or by using more efficient sampling designs such as stratified sampling. In a well-designed study, sampling error is understood, reported (typically as a margin of error or confidence interval), and kept within acceptable bounds.

**Non-sampling error** encompasses all other errors that can affect research quality: measurement error, non-response error, data entry mistakes, interviewer bias, respondent misunderstanding, and processing errors, among others. Non-sampling errors are often **more dangerous** than sampling errors for two important reasons. First, they cannot be reduced simply by increasing the sample size -- in fact, a larger sample may actually increase some forms of non-sampling error by making data collection harder to supervise and control. Second, non-sampling errors are typically harder to detect, quantify, and correct after the fact. A systematic bias in the questionnaire, for example, affects every response, and no amount of statistical adjustment can fully compensate for a flawed measurement instrument.

The specific sources of error that researchers must guard against include the following (adapted from Cox & Enis, 1972; Bellenger & Greenberg, 1978). **Sampling frame errors** occur when the frame does not accurately represent the target population -- when it includes individuals who should be excluded, excludes individuals who should be included, or both. These errors introduce a systematic bias that cannot be corrected by drawing a larger sample from the same flawed frame. **Selection errors** arise when the sampling procedure is not followed correctly -- when interviewers deviate from the selection protocol, substitute more convenient respondents for those who are difficult to reach, or make mistakes in applying the sampling rules. **Non-response errors** occur when selected individuals decline to participate or cannot be contacted, and when those who do not respond differ systematically from those who do. If dissatisfied customers are less likely to respond to a satisfaction survey, for instance, the results will overestimate satisfaction levels. **Response errors** arise when participants provide inaccurate answers, whether through misunderstanding of the questions, social desirability bias, faulty recall, or deliberate misrepresentation. Finally, **data processing errors** -- mistakes in coding, data entry, or statistical analysis -- can distort results even when the data themselves are sound.

<div class="callout callout-jesuit">
<p class="callout-title">Jesuit Perspective</p>
<p>The Jesuit commitment to justice demands that we consider <strong>who is represented in our samples and who is excluded</strong>. When sampling methods systematically exclude certain populations—those without internet access, non-English speakers, people in poverty, individuals with disabilities—the resulting data reflect only a partial truth. Research that claims to represent "consumers" or "employees" but excludes marginalized groups perpetuates inequality by making those groups invisible in the evidence base that informs business decisions. Inclusive sampling is not just methodologically sound; it is ethically imperative.</p>
</div>

<div class="activity-match" data-activity-id="m7-match-2" data-points="15">
  <div class="activity-header">
    <span class="activity-type-badge match">Match Pairs</span>
    <h3>Match the Error Type to Its Description</h3>
    <span class="activity-points-badge">+15 XP</span>
  </div>
  <div class="activity-body">
    <p>Click an item on the left, then click its match on the right.</p>
    <div class="match-container">
      <div class="match-left">
        <div class="match-column-label">Error Type</div>
        <div class="match-item" data-match-id="l1" data-match-target="r1">Sampling Frame Error</div>
        <div class="match-item" data-match-id="l2" data-match-target="r2">Selection Error</div>
        <div class="match-item" data-match-id="l3" data-match-target="r3">Non-Response Error</div>
        <div class="match-item" data-match-id="l4" data-match-target="r4">Response Error</div>
        <div class="match-item" data-match-id="l5" data-match-target="r5">Data Processing Error</div>
      </div>
      <div class="match-right">
        <div class="match-column-label">Description</div>
        <div class="match-item" data-match-id="r3">Selected individuals decline to participate or cannot be contacted, and those who do not respond differ systematically from those who do</div>
        <div class="match-item" data-match-id="r5">Mistakes in coding, data entry, or statistical analysis distort results even when the original data are sound</div>
        <div class="match-item" data-match-id="r1">The list used to draw the sample does not accurately represent the target population, including or excluding individuals who should not be</div>
        <div class="match-item" data-match-id="r4">Participants provide inaccurate answers due to misunderstanding, social desirability bias, faulty recall, or deliberate misrepresentation</div>
        <div class="match-item" data-match-id="r2">Interviewers deviate from the sampling protocol, substitute convenient respondents, or make mistakes applying the selection rules</div>
      </div>
    </div>
  </div>
  <div class="activity-footer">
    <button class="btn-reset-activity">Try Again</button>
  </div>
</div>

## 7.8 Managing the Data Collection Process

Even the best sampling plan and questionnaire can fail if data collection is poorly managed. The transition from a carefully designed research plan to actual data in hand is fraught with practical challenges, and the quality of the final dataset depends as much on the rigor of the data collection process as on the elegance of the research design.

**Interviewer training** is a foundational element of quality data collection. Every interviewer must understand the study's protocol thoroughly -- not just the mechanics of administering the questionnaire, but the rationale behind the procedures. Trained interviewers know how to read questions exactly as written, how to probe incomplete or ambiguous responses without introducing bias, and how to maintain a neutral demeanor that does not signal approval or disapproval of particular answers. In studies that involve open-ended questions, interviewers must be skilled at recording responses accurately and completely. Training should include practice sessions with role-playing and feedback, and interviewers should demonstrate competency before being deployed in the field.

**Supervision and quality control** must be ongoing throughout the data collection period, not merely established at the outset and then left unattended. Supervisors should monitor data collection in real time, reviewing completed questionnaires for completeness and consistency, listening in on telephone interviews, and conducting verification callbacks to confirm that interviews actually took place. Interviewer fabrication -- the invention of data by interviewers who did not actually conduct the interviews -- is a well-documented problem in survey research, and only active supervision can detect and prevent it. Supervisors should also watch for systematic errors, such as interviewers who consistently skip certain questions or record responses in patterns that suggest inattention.

**Response rate tracking** is essential for assessing the representativeness of the final sample. The researcher should monitor response rates across subgroups, geographic areas, and time periods throughout the data collection process. If response rates are low in certain segments, additional follow-up efforts -- reminder mailings, callback attempts at different times of day, or alternative modes of contact -- should be deployed to bring those segments closer to the target. Low overall response rates, or differential response rates across subgroups, raise concerns about non-response bias and should be documented and addressed in the study's limitations section.

**Data security** has become an increasingly critical concern as research collects more sensitive information and as data breaches carry more severe legal and reputational consequences. Respondent data must be protected from unauthorized access at every stage -- during collection, transmission, storage, and analysis. This includes physical security measures (locked filing cabinets for paper questionnaires), electronic security measures (encrypted databases, secure file transfers, password-protected access), and procedural safeguards (limiting access to identified data to those who need it, de-identifying data as early as possible in the process).

Finally, thorough **documentation** of the data collection process is essential for both immediate quality assessment and long-term research value. The researcher should maintain a complete record of the procedures used, the problems encountered (and how they were resolved), the deviations from the original plan, the response rates achieved, and any decisions made during data collection that might affect the interpretation of results. This documentation serves multiple purposes: it enables the researcher to assess data quality honestly, it allows other researchers to evaluate and replicate the study, and it provides an audit trail that supports the credibility and transparency of the research.

<div class="activity-flashcards" data-activity-id="m7-flash-1" data-points="10">
  <div class="activity-header">
    <span class="activity-type-badge flashcards">Flashcards</span>
    <h3>Key Sampling Terms</h3>
    <span class="activity-points-badge">+10 XP</span>
  </div>
  <div class="activity-body">
    <div class="flashcard-deck">
      <div class="flashcard">
        <div class="flashcard-inner">
          <div class="flashcard-front">Sampling Frame</div>
          <div class="flashcard-back">The actual list, directory, database, or mechanism from which sample members are drawn. It is the operational representation of the target population and may not perfectly match it.</div>
        </div>
      </div>
      <div class="flashcard">
        <div class="flashcard-inner">
          <div class="flashcard-front">Probability Sampling</div>
          <div class="flashcard-back">A sampling approach in which every member of the target population has a known, non-zero probability of being selected, enabling the researcher to estimate sampling error and generalize findings statistically.</div>
        </div>
      </div>
      <div class="flashcard">
        <div class="flashcard-inner">
          <div class="flashcard-front">Stratified Sampling</div>
          <div class="flashcard-back">A probability sampling method in which the population is divided into mutually exclusive, homogeneous subgroups (strata) and a separate random sample is drawn from each stratum to ensure all key subgroups are represented.</div>
        </div>
      </div>
      <div class="flashcard">
        <div class="flashcard-inner">
          <div class="flashcard-front">Cluster Sampling</div>
          <div class="flashcard-back">A probability sampling method in which the population is divided into heterogeneous groups (clusters), a random subset of clusters is selected, and then all or some members within those clusters are studied. It reduces cost for geographically dispersed populations.</div>
        </div>
      </div>
      <div class="flashcard">
        <div class="flashcard-inner">
          <div class="flashcard-front">Sampling Error</div>
          <div class="flashcard-back">The difference between a sample statistic and the true population parameter, arising because a sample rather than a census was used. It is quantifiable, controllable, and can be reduced by increasing sample size.</div>
        </div>
      </div>
      <div class="flashcard">
        <div class="flashcard-inner">
          <div class="flashcard-front">Non-Response Error</div>
          <div class="flashcard-back">A type of non-sampling error that occurs when selected individuals decline to participate or cannot be contacted, and when those who do not respond differ systematically from those who do, biasing the results.</div>
        </div>
      </div>
    </div>
    <p class="flashcard-hint">Click the card to flip it</p>
    <div class="flashcard-nav">
      <button class="fc-prev">Previous</button>
      <span class="fc-counter">1 / 6</span>
      <button class="fc-next">Next</button>
      <button class="fc-got-it">Got It!</button>
    </div>
    <div class="fc-progress-info">Mastered: <span class="fc-mastered-count">0</span> / 6</div>
  </div>
  <div class="activity-footer"></div>
</div>

<div class="callout callout-key-concept">
<p class="callout-title">Canvas Submission</p>
<p>Complete all five interactive activities in this module and submit your Progress Report in Canvas. Submit <strong>Research Proposal Milestone 3: Methodology and Sampling Plan</strong> in Canvas. Detail your data collection method, sampling strategy, and sample size rationale. Complete a <strong>Peer Review</strong> of two classmates' research proposal drafts. Post your discussion response.</p>
</div>

---

## Recommended Resources

### Academic Texts
- Zikmund, W. G., Babin, B. J., Carr, J. C., & Griffin, M. (2013). *Business Research Methods* (9th ed.). Cengage Learning. — Chapters 12–14.
- Churchill, G. A., & Iacobucci, D. (2015). *Marketing Research: Methodological Foundations*. Cengage Learning. — Chapters 13–14.
- Lohr, S. L. (2022). *Sampling: Design and Analysis* (3rd ed.). Chapman & Hall/CRC.
- Cox, K. K., & Enis, B. M. (1972). *The Marketing Research Process*. Goodyear Publishing.
- Bellenger, D. N., & Greenberg, B. A. (1978). *Marketing Research: A Management Information Approach*. Irwin.

### Interactive Tools
- **Sampling Simulator** (Patil) — An interactive app for exploring sampling methods (simple random, stratified, cluster, systematic, multi-stage, PPS, adaptive, and bootstrap), visualizing sampling distributions, calculating sample sizes, and conducting power analysis: [analytics.gonzaga.edu/sampling/](https://analytics.gonzaga.edu/sampling/)

### Online Resources
- Pew Research Center: Sampling Methods — [www.pewresearch.org/methods](https://www.pewresearch.org/methods/)
- Qualtrics: Sample Size Calculator — [www.qualtrics.com/blog/calculating-sample-size/](https://www.qualtrics.com/blog/calculating-sample-size/)

### Companion Resource
- Patil, V. H. (2024). *Notes on Survey Design*, Chapter 4: Sampling — [patilv.com/Survey-Design/chapters/chapter-4/](https://patilv.com/Survey-Design/chapters/chapter-4/)
