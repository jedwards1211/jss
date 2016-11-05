import warning from 'warning'
import Rule from './rules/Rule'
import SimpleRule from './rules/SimpleRule'
import KeyframeRule from './rules/KeyframeRule'
import ConditionalRule from './rules/ConditionalRule'
import FontFaceRule from './rules/FontFaceRule'

/**
 * Map of at rules to corresponding implementation class.
 *
 * @type {Object}
 */
const atRuleClassMap = {
  '@charset': SimpleRule,
  '@import': SimpleRule,
  '@namespace': SimpleRule,
  '@keyframes': KeyframeRule,
  '@media': ConditionalRule,
  '@supports': ConditionalRule,
  '@font-face': FontFaceRule
}

const atRuleNameRegExp = /^@[^ ]+/

/**
 * Create rule factory.
 *
 * Options:
 *   - `className` pass class name if you to define it manually
 *
 * @param {Object} [name] if you don't pass selector - it will be generated
 * @param {Object} [style] declarations block
 * @param {Object} [options] rule options
 * @return {Object} rule
 * @api private
 */
export default function createRule(name, style = {}, options = {}) {
  let RuleClass = Rule

  // Is an at-rule.
  if (name && name[0] === '@') {
    const atRuleName = atRuleNameRegExp.exec(name)[0]
    const AtRule = atRuleClassMap[atRuleName]

    if (AtRule) RuleClass = AtRule
    else warning(false, '[JSS] Unknown at-rule %s', name)
  }

  return new RuleClass(name, style, options)
}
