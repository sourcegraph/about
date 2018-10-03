var fs = require('fs')

/**
 *
 * Adapted from https://github.com/saibotsivad/json-schema-to-markdown
 */
var coreSchemaTypes = ['array', 'boolean', 'integer', 'number', 'null', 'object', 'string']

function generateElementTitle(octothorpes, elementName, elementType, isRequired, isEnum, example, topLevel) {
  var text = [octothorpes]
  if (elementName) {
    text.push(' `' + elementName + '`')
  }
  if (elementType || isRequired) {
    if (elementName) {
      text.push(' (')
    }
    if (elementType) {
      if (!coreSchemaTypes.includes(elementType)) {
        if (Array.isArray(elementType)) {
          for (const [key, e] of elementType.entries()) {
            if (!coreSchemaTypes.includes(e)) {
              text.push('[' + e + '](' + generateHash(e.toString(), 'object', false, false, undefined) + ')')
            } else {
              if (key === elementType.length - 1) {
                text.push(e)
              } else {
                text.push(e + ',')
              }
            }
          }
        } else {
          text.push(
            '[' + elementType + '](' + generateHash(elementType.toString(), 'object', false, false, undefined) + ')'
          )
        }
      } else {
        text.push(elementType)
      }
    }
    if (isEnum) {
      text.push(', enum')
    }
    if (isRequired) {
      text.push(', required')
    }
    if (elementName) {
      text.push(')')
    }
  }
  if (example) {
    text.push(' eg: `' + example + '`')
  }
  return text.join('')
}

function generateHash(elementName, elementType, isRequired, isEnum, example) {
  var text = ['#']
  if (elementName) {
    text.push(elementName.toLowerCase().replace(/\W/g, ''))
  }
  if (elementType || isRequired) {
    if (elementType) {
      text.push('-' + elementType.toString().replace(',', ''))
    }
    if (isEnum) {
      text.push('-enum')
    }
    if (isRequired) {
      text.push('-required')
    }
  }
  return text.join('')
}

function generateElementList(schema) {
  var text = []
  Object.keys(schema.properties).map(function(propertyKey) {
    var hash = generateHash(
      propertyKey,
      schema.properties[propertyKey].type,
      false,
      schema.properties[propertyKey].enum,
      schema.properties[propertyKey].example
    ).toLowerCase()
    if (schema.properties[propertyKey].type) {
      text.push('- ' + '[' + propertyKey + '](' + hash + ')')
    } else {
      if (hash === '#settings') {
        text.push('- ' + '[' + propertyKey + '](' + hash + ')')
      } else if (schema.properties[propertyKey].$ref) {
        type = schema.properties[propertyKey].$ref && schema.properties[propertyKey].$ref.replace('#/definitions/', '')
        text.push('- ' + '[' + propertyKey + '](' + hash + '-' + type.toLowerCase() + ')')
      } else {
        text.push('- ' + '[' + propertyKey + '](' + hash + ')')
      }
    }
  })

  if (schema.definitions) {
    Object.keys(schema.definitions).map(function(definitionKey) {
      var hash = generateHash(
        definitionKey,
        schema.definitions[definitionKey].type,
        false,
        schema.definitions[definitionKey].enum,
        schema.definitions[definitionKey].example
      ).toLowerCase()
      if (schema.definitions[definitionKey].type) {
        text.push('- ' + '[' + definitionKey + '](' + hash + ')')
      } else {
        text.push('- ' + '[' + definitionKey + '](#' + definitionKey.toLowerCase().replace(/\W/g, '') + ')')
      }
    })
  }

  text.push('\n')

  return text
}

function generatePropertyRestrictions(schema) {
  var generate = generateSinglePropertyRestriction(schema)
  return [
    generate('minimum', 'Minimum'),
    generate('maximum', 'Maximum'),
    generate('pattern', 'Regex pattern'),
    generate('minItems', 'Minimum items'),
    generate('uniqueItems', 'Unique items'),
  ]
    .filter(function(text) {
      return text
    })
    .join('\n')
}

function generateSinglePropertyRestriction(schema) {
  return function(key, text) {
    if (schema[key]) {
      return '* ' + text + ': `' + schema[key] + '`'
    } else {
      return null
    }
  }
}

function generateSchemaSectionText(octothorpes, name, isRequired, schema, subSchemas, topLevel) {
  var schemaType = getActualType(schema, subSchemas)
  var text = [
    octothorpes.split('').length <= 2 ? '<br/>' : '',
    generateElementTitle(octothorpes, name, schemaType, isRequired, schema.enum, schema.example, topLevel),
    schema.description,
  ]

  if (schemaType === 'object') {
    if (schema.properties) {
      text.push('Properties of the `' + name + '` object:')
      generatePropertySection(octothorpes, schema, subSchemas).forEach(function(section) {
        text = text.concat(section)
      })
    }
  } else if (schemaType === 'array') {
    var itemsType = schema.items && schema.items.type

    if (!itemsType && schema.items['$ref']) {
      itemsType = getActualType(schema.items, subSchemas)
    }

    if (itemsType && name) {
      if (!coreSchemaTypes.includes(itemsType)) {
        text.push(
          'The object is an array with all elements of the type [`' +
            itemsType +
            '`](' +
            generateHash(itemsType, 'object', false, false, undefined) +
            ').'
        )
      } else {
        text.push('The object is an array with all elements of the type `' + itemsType + '`.')
      }
    } else if (itemsType) {
      text.push('The schema defines an array with all elements of the type `' + itemsType + '`.')
    } else {
      var validationItems = []

      if (schema.items.allOf) {
        text.push('The elements of the array must match *all* of the following types:')
        validationItems = schema.items.allOf
      } else if (schema.items.anyOf) {
        text.push('The elements of the array must match *at least one* of the following types:')
        validationItems = schema.items.anyOf
      } else if (schema.items.oneOf) {
        text.push('The elements of the array must match *exactly one* of the following types:')
        validationItems = schema.items.oneOf
      } else if (schema.items.not) {
        text.push('The elements of the array must *not* match the following types:')
        validationItems = schema.items.not
      }

      if (validationItems.length > 0) {
        validationItems.forEach(function(item) {
          text = text.concat(generateSchemaSectionText(octothorpes + '##', undefined, false, item, subSchemas, true))
        })
      }
    }

    if (itemsType === 'object') {
      text.push('\nThe array object has the following properties:')
      generatePropertySection(octothorpes, schema.items, subSchemas).forEach(function(section) {
        if (!Array.isArray(section)) {
          return
        }

        section.forEach(function(line, index) {
          regex = /^###\s/
          line = line.replace(regex, '')
          section[index] = line
        })

        s = section
          .filter(function(line) {
            return !!line
          })
          .join('\n  ')

        text = text.concat('* ' + s)
      })
    }
  } else if (schema.oneOf) {
    text.push('The object must be one of the following types:')
    if (schema.oneOf['$ref']) {
      text.push(
        schema.oneOf
          .map(function(oneOf) {
            return '- `' + subSchemas[oneOf['$ref']] + '`'
          })
          .join('\n')
      )
    } else {
      var oneOfList = schema.oneOf
        .map(function(innerSchema) {
          return '- `' + getActualType(innerSchema, subSchemas) + '`'
        })
        .join('\n')
      text.push(oneOfList)
    }
  }

  if (schema.enum) {
    text.push('This property must be one of the following enum values:')
    text.push(
      schema.enum
        .map(function(enumItem) {
          return '- `' + enumItem + '`'
        })
        .join('\n')
    )
  }

  if (schema.const) {
    text.push('Constant value: `' + JSON.stringify(schema.const) + '`')
  }

  if (schema.default !== undefined) {
    if (schema.default === null || ['boolean', 'number', 'string'].indexOf(typeof schema.default) !== -1) {
      text.push('Default: `' + JSON.stringify(schema.default) + '`')
    } else {
      text.push('Default:')
      text.push('```\n' + JSON.stringify(schema.default, null, 2) + '\n```')
    }
  }

  var restrictions = generatePropertyRestrictions(schema)

  if (restrictions) {
    text.push('Additional restrictions:')
    text.push(restrictions)
  }
  return text
}

function generatePropertySection(octothorpes, schema, subSchemas) {
  if (schema.properties) {
    return Object.keys(schema.properties).map(function(propertyKey) {
      var propertyIsRequired = schema.required && schema.required.indexOf(propertyKey) >= 0
      return generateSchemaSectionText(
        octothorpes + '#',
        propertyKey,
        propertyIsRequired,
        schema.properties[propertyKey],
        subSchemas,
        false
      )
    })
  } else if (schema.oneOf) {
    var oneOfList = schema.oneOf
      .map(function(innerSchema) {
        return '- `' + getActualType(innerSchema, subSchemas) + '`'
      })
      .join('\n')
    return ['This property must be one of the following types:', oneOfList]
  } else {
    return []
  }
}

function getActualType(schema, subSchemas) {
  if (schema.type) {
    return schema.type
  } else if (schema['$ref'] && subSchemas[schema['$ref']]) {
    return subSchemas[schema['$ref']]
  } else {
    return undefined
  }
}

function parse(schema, startingOctothorpes) {
  var subSchemaTypes = Object.keys(schema.definitions || {}).reduce(function(map, subSchemaTypeName) {
    map['#/definitions/' + subSchemaTypeName] = subSchemaTypeName
    return map
  }, {})
  var text = []
  var octothorpes = startingOctothorpes || ''

  if (schema.title) {
    octothorpes += '#'
    text.push('<hr />')
    text.push(octothorpes + ' Reference')
  }

  if (schema.type === 'object') {
    text.push('The available configuration options for Sourcegraph are listed below:')
    generatePropertySection(octothorpes, schema, subSchemaTypes).forEach(function(section) {
      text = text.concat(section)
    })
  } else {
    text = text.concat(generateSchemaSectionText('#' + octothorpes, undefined, false, schema, subSchemaTypes, true))
  }
  if (schema.definitions) {
    text.push('<hr style="border: 0;border-bottom: 2px black solid;" />\n\n')
    text.push('# Types')
    Object.keys(schema.definitions).forEach(function(subSchemaTypeName) {
      text.push('## `' + subSchemaTypeName + '` (' + schema.definitions[subSchemaTypeName].type + ')')
      text.push(schema.definitions[subSchemaTypeName].description)
      if (schema.definitions[subSchemaTypeName].type === 'object') {
        if (schema.definitions[subSchemaTypeName].properties) {
          text.push('Properties of the `' + subSchemaTypeName + '` object:')
        }
      }
      generatePropertySection('##', schema.definitions[subSchemaTypeName], subSchemaTypes).forEach(function(section) {
        text = text.concat(section)
      })
      text.push('<hr />\n\n')
    })
  }
  return text
    .filter(function(line) {
      return !!line
    })
    .join('\n\n')
}

// This function replaces https://about.sourcegraph/... links with markdown links.
// This will work as long as there is a . or whitespace at the end of the url.
function removeAboutSourcegraphLinks(parsed) {
  var brokenLinks = /(https:\/\/about.sourcegraph.com)[^\s|\.]+(?=\s|\.)/g
  var listOfBrokenLinks = parsed.match(brokenLinks)
  listOfBrokenLinks = [...new Set(listOfBrokenLinks)]
  var path = /https:\/\/about.sourcegraph.com([^\s|\.|$]+)$/
  for (broken of listOfBrokenLinks) {
    var p = broken.match(path)
    if (p && p.length >= 2) {
      p = p[1]
    }
    var regex = `${broken}(?=\\s|\\.)`
    var b = new RegExp(regex, 'g')
    parsed = parsed.replace(b, `[${broken}](${p})`)
  }
  return parsed
}

/**
 * Generate settings docs
 */
var schema = fs.readFile('./utils/site.schema.json', 'utf8', function(err, data) {
  if (err) {
    return console.log(err)
  }
  var d = JSON.parse(data)
  var frontmatter =
    '---\nlayout: markdown\ntitle: Sourcegraph site configuration options\npermalink: docs/config/site\n---\n'
  var style = `<style>h2, h3 { font-weight: 500
 }</style>\n`
  var intro = `This page lists site configuration options for Sourcegraph.
    \n\nConfigure your Sourcegraph instance on the **Configuration** page in the site admin area.
    For more information, see ["Configuration overview"](/docs/config).\n\n`
  var markdown = parse(d)
  markdown = removeAboutSourcegraphLinks(markdown)
  var toc = generateElementList(d)
    .filter(function(line) {
      return !!line
    })
    .join('\n\n')
  var contents = frontmatter + intro + toc + markdown
  fs.writeFile('../docs/server/config/site.md', contents, 'utf8', function(err) {
    if (err) {
      console.log(err)
    }
  })
})
